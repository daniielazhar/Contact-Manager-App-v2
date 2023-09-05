import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResult,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const getContactList = (searchTerm.length < 1 ? contacts : searchResult).map(
    (contact) => {
      return <ContactCard contact={contact} key={contact.id} />;
    }
  );

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="main">
      <br />
      <br />
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui purple button" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h1>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            style={{ width: "500px" }}
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon" style={{ color: "purple" }}></i>
        </div>
      </div>
      <div className="ui celled list">
        {getContactList.length > 0 ? getContactList : "Contacts Not Found"}
      </div>
    </div>
  );
};

export default ContactList;
