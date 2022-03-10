import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import AddContact from "../AddContact/AddContact";
import ContactTable from "../ContactTable/ContactTable";
import ContactInfo from "../ContactInfo/ContactInfo";

import Logo from "../../contact-list.png";

import "./contactmain.scss";

const ContactMain = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [
          {
            id: Date.now(),
            fname: "Mike Huston",
            email: "mikehuston@live.com",
            phone: "(239) 816-9029",
            company: "Alibaba Traders .co",
            Role: "Chief Operating Officer",
            address: "Bay Area, San Francisco, CA",
          },
        ]
  );

  const [filterText, setFilterText] = useState("");

  const [activeContact, setActiveContact] = useState(contacts[0]);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    addToLocalStorage(newContacts);
  };

  const addToLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    addToLocalStorage(newContacts);
  };

  const editContact = (contact) => {
    const newContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(newContacts);
    addToLocalStorage(newContacts);
  };

  const showActiveUser = (id) => {
    const newActiveContact = contacts.find((contact) => contact.id === id);
    setActiveContact(newActiveContact);
  };

  return (
    <div className='main-content container-fluid'>
      <div className='row'>
        <div className='main-content-top col-md-12'></div>
      </div>
      <div className='row'>
        <div
          className='main-content-bottom container-fluid mt-5'
          style={{ width: "93%", height: "100%" }}
        >
          <div className='row'>
            <div className='col-md-1 p-0'>
              <img src={Logo} alt='logo' className='logo' />
            </div>
            <div className='col-md-11'>
              <div className='main-content-header'>
                <h3>Contacts</h3>
                <p>Welcome to FlatCRM Contact page</p>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-2 d-flex'>
              <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
              />
            </div>
            <div className='col-md-10 d-flex align-center'>
              <AddContact addContact={addContact} />
            </div>
          </div>
          <div className='row mt-5'>
            <ContactTable
              contacts={contacts}
              deleteContact={deleteContact}
              filterText={filterText}
              showActiveUser={showActiveUser}
            />
            <ContactInfo activeContact={activeContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
