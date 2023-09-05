import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactDelete = (props) => {
  console.log(props);
  const { removeContactHandler } = useContactsCrud();
  const { id } = useParams();
  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  return (
    <div className="header">
      <br />
      <br />
      <div>
        <h2>Are you sure you want to delete this contact ?</h2>
        <br />
      </div>

      <Link to="/">
        <button className="ui green button" onClick={() => deleteContact(id)}>
          Yes
        </button>
      </Link>
      <Link to="/">
        <button className="ui red button">Cancel</button>
      </Link>
    </div>
  );
};

export default ContactDelete;
