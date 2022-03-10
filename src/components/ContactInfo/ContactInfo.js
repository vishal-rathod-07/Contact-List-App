import ContactAvatar from "../ContactAvatar/ContactAvatar";
import EditContact from "../EditContact/EditContact";

import "./contactinfo.scss";

const ContactInfo = (props) => {
  const { fname, email, phone, company, Role, address } = props.activeContact;
  return (
    <div className='col-md-6'>
      <div className='main-content-card'>
        <div
          className='container'
          style={{
            width: "90%",
            margin: "auto",
          }}
        >
          <div className='row'>
            <div className='col-md-12'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <ContactAvatar name={fname} className={"info-avatar"} />
                    <div className='mt-3'>
                      <h4>{fname}</h4>
                      <p className='mb-1 text-secondary'>
                        {Role} @ {company}
                      </p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm-3'>
                      <h6 className=' mb-0 text-secondary'>Full Name</h6>
                    </div>
                    <div className='col-sm-9  '>{fname}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className=' mb-0 text-secondary '>Email</h6>
                    </div>
                    <div className='col-sm-9'>{email}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className=' mb-0 text-secondary'>Phone</h6>
                    </div>
                    <div className='col-sm-9  '>{phone}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className=' mb-0 text-secondary'>Company</h6>
                    </div>
                    <div className='col-sm-9  '>{company}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className=' mb-0 text-secondary'>Address</h6>
                    </div>
                    <div className='col-sm-9  '>{address}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-12 text-center'>
                      <EditContact />
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
    </div>
  );
};

export default ContactInfo;
