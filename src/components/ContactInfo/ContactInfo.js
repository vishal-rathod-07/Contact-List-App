import ContactAvatar from "../ContactAvatar/ContactAvatar";
import ContactButton from "../ContactButton/ContactButton";
import { useEffect, useState } from "react";

import "./contactinfo.scss";

const ContactInfo = (props) => {
  const { id, fname, email, phone, company, Role, address } =
    props.activeContact;

  const [contact, setContact] = useState({
    id: id,
    fname: fname,
    email: email,
    phone: phone,
    company: company,
    Role: Role,
    address: address,
  });

  useEffect(() => {
    setContact({
      id: id,
      fname: fname,
      email: email,
      phone: phone,
      company: company,
      Role: Role,
      address: address,
    });
  }, [id, fname, email, phone, company, Role, address]);

  return (
    <div className='main-content-card'>
      <div
        className='container'
        style={{
          width: "100%",
        }}
      >
        <div className='row'>
          <div className='col-md-12'>
            <div className='card mb-3'>
              <div
                className='card-body'
                style={{
                  padding: "1.5rem 4rem",
                }}
              >
                <div className='d-flex flex-column align-items-center text-center'>
                  <ContactAvatar
                    name={contact.fname}
                    className={"info-avatar"}
                  />
                  <div className='mt-3'>
                    <h4>{contact.fname}</h4>
                    <p className='mb-1 text-secondary'>
                      {contact.Role} @ {contact.company}
                    </p>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-sm-4'>
                    <h6 className=' mb-0 text-secondary'>Full Name</h6>
                  </div>
                  <div className='col-sm-8  '>{contact.fname}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-4'>
                    <h6 className=' mb-0 text-secondary '>Email</h6>
                  </div>
                  <div className='col-sm-8'>{contact.email}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-4'>
                    <h6 className=' mb-0 text-secondary'>Phone</h6>
                  </div>
                  <div className='col-sm-8  '>{contact.phone}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-4'>
                    <h6 className=' mb-0 text-secondary'>Company</h6>
                  </div>
                  <div className='col-sm-8  '>{contact.company}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-4'>
                    <h6 className=' mb-0 text-secondary'>Address</h6>
                  </div>
                  <div className='col-sm-8  '>{contact.address}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-12 text-center'>
                    {/* <EditContact /> */}
                    <ContactButton
                      btnIcon={"pencil"}
                      btnText={"Edit Contact"}
                      setModalShow={props.setModalShow}
                      setIsEdit={props.setIsEdit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'></div>
          <div className='row'></div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
