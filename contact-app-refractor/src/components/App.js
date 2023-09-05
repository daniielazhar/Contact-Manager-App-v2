import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ContactDelete from "./ContactDelete";
import ContactEdit from "./ContactEdit";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/add" element={<ContactAdd />} />
            <Route path="/" exact element={<ContactList />} />
            <Route path="/detcontact/:id" element={<ContactDetail />} />
            <Route path="/delcontact/:id" element={<ContactDelete />} />
            <Route path="/contacts/:id" element={<ContactEdit />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
