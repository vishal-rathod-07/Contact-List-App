import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/outline';

import './contactbutton.scss';

const ContactButton = ({
  btnIcon,
  btnText,
  setIsEdit,
  btnType,
  setModalShow,
}) => {
  return (
    <>
      <Button
        variant='default'
        onClick={() => {
          setModalShow(true);
          btnType === 'add' ? setIsEdit(false) : setIsEdit(true);
        }}
        className='contact-btn'
      >
        {btnIcon === 'pencil' ? (
          <PencilIcon className='edit-icon align-middle' />
        ) : btnIcon === 'plus' ? (
          <PlusIcon className='edit-icon align-middle' />
        ) : null}
        {btnText}
      </Button>
    </>
  );
};

export default ContactButton;
