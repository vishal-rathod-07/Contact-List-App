import { useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustomFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            pattern='^\S[A-Za-z\s]{1,32}\S$'
            placeholder='Enter First Name'
            defaultValue='Mark'
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please enter a valid first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustomLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            pattern='^\S[A-Za-z\s]{1,32}\S$'
            placeholder='Enter last name'
            defaultValue='Otto'
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please enter a valid last name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustomEmail'>
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type='email'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              placeholder='Enter Email'
              aria-describedby='inputGroupPrepend'
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationPhoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='tel'
            pattern='^(7|8|9)\d{9}$'
            placeholder='Enter Phone Number'
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom04'>
          <Form.Label>Company</Form.Label>
          <Form.Control
            type='text'
            pattern='^\S[A-Za-z1-9\s.]{1,100}\S$'
            placeholder='Enter Company Name'
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please enter a valid compane name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustom05'>
          <Form.Label>Role</Form.Label>
          <Form.Select aria-label='Default select example' required>
            <option selected disabled value=''>
              Select Your Role...
            </option>
            <option value='Chief Executive Officer'>
              Chief Executive Officer
            </option>
            <option value='Chief Operating Officer'>
              Chief Operating Officer
            </option>
            <option value='Chief Financial Officer'>
              Chief Financial Officer
            </option>
            <option value='Executive Assistant'>Executive Assistant</option>
            <option value='President'>President</option>
            <option value='Vice President'>Vice President</option>
            <option value='Product Manager'>Product Manager</option>
            <option value='Purchasing Manager'>Purchasing Manager</option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Finance Manager'>Finance Manager</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please select a valid role.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='12' controlId='validationAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter address here'
            rows={5}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type='submit'>Submit form</Button>
    </Form>
  );
};

export default ContactForm;
