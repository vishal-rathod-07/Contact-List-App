import ContactAvatar from '../ContactAvatar/ContactAvatar';
import { TrashIcon } from '@heroicons/react/outline';

import './contactrow.scss';

const ContactRow = ({
  contact,
  deleteContact,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
}) => {
  return (
    <tr key={contact.id}>
      <td className='align-middle text-center'>
        <input
          type='checkbox'
          onChange={() => {
            if (checkedContactIdList.includes(contact.id)) {
              setCheckedContactIDList(
                checkedContactIdList.filter((item) => item !== contact.id)
              );
            } else {
              setCheckedContactIDList([...checkedContactIdList, contact.id]);
            }
          }}
        />
      </td>
      <td onClick={() => showActiveUser(contact.id)}>
        <div className='contact d-flex'>
          <div className='contact-avatar m-2'>
            <ContactAvatar
              name={contact.fname + ' ' + contact.lname}
              className='list-avatar'
            />
          </div>
          <div className='contact-info d-flex flex-column justify-content-center m-2'>
            <div className='contact-info-name'>
              <p className='m-0'>
                {contact.fname} {contact.lname}
              </p>
            </div>
            <div className='contact-info-email'>
              <p className='m-0'>
                <span className='text-secondary'>{contact.email}</span>
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className='align-middle' onClick={() => showActiveUser(contact.id)}>
        <div className='company-name d-flex align-items-center m-auto'>
          <p className='m-0'>{contact.company}</p>
        </div>
      </td>
      <td
        onClick={() => deleteContact(contact.id)}
        className='align-middle text-center'
      >
        <TrashIcon className='trash-icon' />
      </td>
    </tr>
  );
};

export default ContactRow;
