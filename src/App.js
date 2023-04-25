import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import EditContact from "./Components/EditContact.jsx";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const saveContact = (index, updatedContact) => {
    const newContacts = [...contacts];
    newContacts[index] = updatedContact;
    setContacts(newContacts);
  };

  return (
    <>
      <nav className="nav">
        <ul className="list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home contacts={contacts} deleteContact={deleteContact} />}
        />
        <Route
          path="/contact"
          element={<Contact addContact={addContact} />}
        />
        <Route
          path="/edit/:id"
          element={<EditContact saveContact={saveContact} contacts={contacts} />}
        />
      </Routes>
    </>
  );
}

export default App;