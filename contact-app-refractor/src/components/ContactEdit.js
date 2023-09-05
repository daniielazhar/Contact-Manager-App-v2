import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const { contactUpdateHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All this fields are mandatory!");
      return;
    }
    if (/\d/.test(newName)) {
      alert("Name should not contain numbers.");
      return;
    }
    if (!validEmail(newEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    contactUpdateHandler({ id, name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };
  const validEmail = (newEmail) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(newEmail);
  };
  return (
    <div className="ui header">
      <br />
      <h1>Edit Contact</h1>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui purple button">Update</button>
      </form>
    </div>
  );
};

export default ContactEdit;
