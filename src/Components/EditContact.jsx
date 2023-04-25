import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const EditContact = ({ saveContact, contacts }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  

  useEffect(() => {
    const contact = contacts[id];
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
  }, [id, contacts]);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedContact = { name, phone, email };
    saveContact(id, updatedContact);
    navigate('/'); // redirect to home page
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
