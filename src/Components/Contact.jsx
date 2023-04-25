import "../App.css";
import React, { useState } from "react";

const Contact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let nameError = "";
    let phoneError = "";
    let emailError = "";

    if (!name) {
      nameError = "Name is required";
    }
    if (!phone) {
      phoneError = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      phoneError = "Invalid phone number";
    }
    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Invalid email address";
    }

    setNameError(nameError);
    setPhoneError(phoneError);
    setEmailError(emailError);

    if (!nameError && !phoneError && !emailError) {
      const newContact = { name, phone, email };
      addContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <>
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <div className="container">
                    <label>
                      Enter Name &nbsp; &nbsp; &nbsp; &nbsp;
                      <input
                        type="text"
                        name="name"
                        className="input"
                        value={name}
                        placeholder="Enter name here...."
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <div className="ename" id="ename">
                      {nameError}
                    </div>
                <br />
                    <label>
                      Enter Phone &nbsp; &nbsp; &nbsp; &nbsp;
                      <input
                        type="text"
                        name="phone"
                        className="input"
                        value={phone}
                        placeholder="Enter phone here...."
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </label>
                    <div className="ephone" id="ephone">
                      {phoneError}
                    </div>
                <br />
                    <label>
                      Enter Email &nbsp; &nbsp; &nbsp; &nbsp;
                      <input
                        type="text"
                        name="email"
                        className="input"
                        value={email}
                        placeholder="Enter email here...."
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <div className="eemail" id="eemail">
                      {emailError}
                    </div>
                <br />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;