import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = ({ contacts, deleteContact }) => {
  return (
    <>
      <div className="outputfield">
        <table className="table">
          {contacts.map((contact, index) => (
            <tbody className="tbody" key={`row-${index}`}>
              <tr>
                <td>
                  <h4>Name: {contact.name}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Phone: {contact.phone}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Email: {contact.email}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="del" onClick={() => deleteContact(index)}>Delete</button>
                  <Link className="del" to={`/edit/${index}`} >Edit</Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Home;