import { Table } from 'react-bootstrap';
import ContactRow from '../ContactRow/ContactRow';

import './contacttable.scss';

const ContactTable = ({
  contacts,
  filterText,
  deleteContact,
  showActiveUser,
}) => {
  return (
    <div className='main-content-list'>
      <Table>
        <thead>
          <tr>
            <th className='text-center'>+</th>
            <th className='text-secondary'>Basic Info</th>
            <th className='text-secondary'>Company</th>
            <th className='text-center'></th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter(
              (contact) =>
                contact.fname
                  .toLowerCase()
                  .includes(filterText.toLowerCase()) ||
                contact.lname
                  .toLowerCase()
                  .includes(filterText.toLowerCase()) ||
                (
                  contact.fname.toLowerCase() +
                  ' ' +
                  contact.lname.toLowerCase()
                ).includes(filterText.toLowerCase()) ||
                contact.company
                  .toLowerCase()
                  .includes(filterText.toLowerCase()) ||
                contact.email
                  .toLowerCase()
                  .includes(filterText.toLowerCase()) ||
                contact.phone
                  .toLowerCase()
                  .includes(filterText.toLowerCase()) ||
                contact.Role.toLowerCase().includes(filterText.toLowerCase())
            )
            .map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
                showActiveUser={showActiveUser}
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
