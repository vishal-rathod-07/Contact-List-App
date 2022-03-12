import React from 'react';
import { Button } from 'react-bootstrap';
// import ContactModel from "../ContactModel/ContactModel";
import { PencilIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/outline';

import './contactbutton.scss';

const ContactButton = ({
  btnIcon,
  btnText,
  setIsEdit,
  isEdit,
  btnType,
  setModalShow,
}) => {
  //   const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant='default'
        onClick={() => {
          setModalShow(true);
          btnType === 'add' ? setIsEdit(false) : setIsEdit(true);
        }}
        // onClick={setIsEdit(isEdit)}
        className='contact-btn'
      >
        {btnIcon === 'pencil' ? (
          <PencilIcon className='edit-icon align-middle' />
        ) : btnIcon === 'plus' ? (
          <PlusIcon className='edit-icon align-middle' />
        ) : null}
        {btnText}
      </Button>

      {/* <ContactModel
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={isEdit ? "Edit Contact" : "Add Contact"}
      /> */}
    </>
  );
};

export default ContactButton;
