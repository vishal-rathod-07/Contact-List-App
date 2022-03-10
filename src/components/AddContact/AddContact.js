import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./addcontact.scss";

const AddContact = ({ addContact }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contact, setContact] = useState({
    id: Date.now(),
    fname: "",
    email: "",
    phone: "",
    company: "",
    Role: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      fname: "",
      email: "",
      phone: "",
      company: "",
      Role: "",
      address: "",
    });
    setShow(false);
  };

  return (
    <>
      <Button
        variant='default'
        onClick={handleShow}
        className='add-btn'
        style={{
          background: "linear-gradient(45deg, #ff8767, #fe67a3)",
          color: "white",
        }}
      >
        + Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='fullname'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    value={contact.fname}
                    onChange={(e) =>
                      setContact({ ...contact, fname: e.target.value })
                    }
                    placeholder='Enter full Name'
                  />
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    placeholder='Enter email'
                  />
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='phone'>
                    Phone
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={contact.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    placeholder='Enter phone number'
                  />
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='role'>
                    Role
                  </label>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                    onChange={(e) =>
                      setContact({ ...contact, Role: e.target.value })
                    }
                  >
                    <option value=''>Select Your Role</option>
                    <option value='Chief Executive Officer'>
                      Chief Executive Officer
                    </option>
                    <option value='Chief Operating Officer'>
                      Chief Operating Officer
                    </option>
                    <option value='Chief Financial Officer'>
                      Chief Financial Officer
                    </option>
                    <option value='Executive Assistant'>
                      Executive Assistant
                    </option>
                    <option value='President'>President</option>
                    <option value='Vice President'>Vice President</option>
                    <option value='Product Manager'>Product Manager</option>
                    <option value='Purchasing Manager'>
                      Purchasing Manager
                    </option>
                    <option value='Project Manager'>Project Manager</option>
                    <option value='Finance Manager'>Finance Manager</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='company'>
                    Company
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='company'
                    value={contact.company}
                    onChange={(e) =>
                      setContact({ ...contact, company: e.target.value })
                    }
                    placeholder='Enter company name'
                  />
                </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='address'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    value={contact.address}
                    onChange={(e) =>
                      setContact({ ...contact, address: e.target.value })
                    }
                    placeholder='Enter Address'
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContact;
