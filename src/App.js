import './App.css';
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from './Components/Contact';

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

  return (
    <>
      <nav className='nav'>
        <ul className='list'>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/contact" element={<Contact addContact={addContact} />} />
      </Routes>
    </>
  );
}

export default App;
