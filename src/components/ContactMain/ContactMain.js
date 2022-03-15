import { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ContactTable from '../ContactTable/ContactTable';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactButton from '../ContactButton/ContactButton';
import ContactModel from '../ContactModel/ContactModel';

import Logo from '../../contact-list.png';

import './contactmain.scss';

const ContactMain = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [
          {
            id: Date.now(),
            fname: 'Mike',
            lname: 'Huston',
            email: 'mikehuston@live.com',
            phone: '8996652389',
            company: 'Alibaba Traders .co',
            Role: 'Chief Operating Officer',
            address: 'Bay Area, San Francisco, CA',
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filterText, setFilterText] = useState('');

  const [activeContact, setActiveContact] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setIsActive(false);
  };

  const editContact = (contact) => {
    const newContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(newContacts);
    setActiveContact(contact);
  };

  const showActiveUser = (id) => {
    const newActiveContact = contacts.find((contact) => contact.id === id);
    setActiveContact(newActiveContact);
    setIsActive(true);
  };

  return (
    <div className='main-content container-fluid'>
      <div className='row'>
        <div className='main-content-top col-xl-12'></div>
      </div>
      <div className='row'>
        <div
          className='main-content-bottom container-fluid mt-5'
          style={{ width: '93%', height: '100%' }}
        >
          <div className='row'>
            <div className='col-xl-12 d-flex'>
              <img src={Logo} alt='logo' className='logo' />
              <div className='main-content-header'>
                <h3>Contacts</h3>
                <p>Welcome to FlatCRM Contact page</p>
              </div>
            </div>
          </div>
          <div className='row mt-4 mb-4'>
            <div className='col-xl-3 col-md-6'>
              <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
              />
            </div>
            <div className='col-xl-9 col-md-6 d-flex'>
              <ContactButton
                btnIcon={'plus'}
                btnText={'Add Contact'}
                btnType={'add'}
                setModalShow={setModalShow}
                setIsEdit={setIsEdit}
              />
            </div>
          </div>
          <div className='row mt-0'>
            <div className='col-lg-7 '>
              <ContactTable
                contacts={contacts}
                deleteContact={deleteContact}
                filterText={filterText}
                showActiveUser={showActiveUser}
              />
            </div>
            <div className='col-lg-5'>
              {isActive && (
                <ContactInfo
                  activeContact={activeContact}
                  setIsEdit={setIsEdit}
                  setModalShow={setModalShow}
                />
              )}
            </div>
            <ContactModel
              activeContact={activeContact}
              isEdit={isEdit}
              show={modalShow}
              onHide={() => setModalShow(false)}
              title={isEdit ? 'Edit Contact' : 'Add Contact'}
              addContact={addContact}
              editContact={editContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;