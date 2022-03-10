import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";
import ContactInfo from "../ContactInfo/ContactInfo";

import Logo from "../../contact-list.png";

import "./contactmain.scss";

class ContactMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem("contacts")
      ? {
          filterText: "",
          contacts: JSON.parse(localStorage.getItem("contacts")),
        }
      : {
          filterText: "",
          contacts: [
            {
              id: Date.now(),
              fname: "Mike Huston",
              email: "mikehuston@live.com",
              phone: "(239) 816-9029",
              company: "Alibaba Traders .co",
              address: "Bay Area, San Francisco, CA",
            },
          ],
        };
    console.log("Initial State");
    console.table(this.state.contacts);
  }

  addContact = (contact) => {
    console.log(contact);
    this.state.contacts.push(contact);
    this.setState({ contacts: this.state.contacts });

    const newContacts = [...this.state.contacts];
    console.log(newContacts);
    this.addToLocalStorage(newContacts);
    console.log("Contact Added.");
    console.table(this.state);
  };

  addToLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: newContacts });
    this.addToLocalStorage(newContacts);
    console.log("deleted");
  };

  render() {
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
              <div className='col-md-1'>
                <img src={Logo} alt='logo' className='logo' />
              </div>
              <div className='col-md-11'>
                <div className='main-content-header'>
                  <h3>Contacts</h3>
                  <p>Welcome to FlatCRM Contact page</p>
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-md-2 d-flex'>
                <SearchBar filterText={this.state.filterText} />
              </div>
              <div className='col-md-10 d-flex align-center'>
                <AddContact addContact={this.addContact} />
              </div>
            </div>
            <div className='row mt-5'>
              <ContactList
                contacts={this.state.contacts}
                filterText={this.state.filterText}
                deleteContact={this.deleteContact}
              />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMain;
