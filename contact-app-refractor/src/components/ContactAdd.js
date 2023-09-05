import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";

const ContactAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { contactAddHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All this fields are mandatory!");
      return;
    }
    if (/\d/.test(name)) {
      alert("Name should not contain numbers.");
      return;
    }
    if (!validEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    contactAddHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };
  const validEmail = (email) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  };
  return (
    <div className="ui header">
      <br />
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui purple button">Add</button>
      </form>
    </div>
  );
};

export default ContactAdd;
