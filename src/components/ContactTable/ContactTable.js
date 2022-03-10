import { Table } from "react-bootstrap";
import ContactRow from "../ContactRow/ContactRow";

import "./contacttable.scss";

const ContactTable = ({
  contacts,
  filterText,
  deleteContact,
  showActiveUser,
}) => {
  return (
    <div className='col-md-6 '>
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
              .filter((contact) =>
                contact.fname.toLowerCase().includes(filterText.toLowerCase())
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
    </div>
  );
};

export default ContactTable;
