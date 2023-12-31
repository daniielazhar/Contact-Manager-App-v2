import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user2.png";

const ContactDetail = (props) => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  console.log(props);

  return (
    <div className="main">
      <br />
      <br />
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div" style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="ui purple button">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
