import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  //console.log(props.contact);
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/detcontact/${id}`} state={{ contact: props.contact }}>
          <div className="header" style={{ fontSize: 18 }}>
            {name}
          </div>
          <div style={{ fontSize: 15 }}>{email}</div>
        </Link>
      </div>
      <Link to={`/delcontact/${id}`}>
        <div style={{ float: "right" }}>
          <i
            className="trash alternate icon"
            style={{
              color: "red",
              marginTop: "7px",
            }}></i>
        </div>
      </Link>
      <Link to={`/contacts/${id}`} state={{ contact: props.contact }}>
        <div style={{ float: "right" }}>
          <i
            className="edit alternate icon"
            style={{
              color: "purple",
              marginTop: "7px",
              marginRight: "15px",
            }}></i>
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
