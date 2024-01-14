import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { USER_LIST_ROUTE } from '../utils/consts';
import { createForm } from '../http/formAPI';

const MyForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [education, setEducation] = useState('');
  const [work, setWork] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleWorkChange = (e) => {
    setWork(e.target.value);
  };

  const createUserForm = async () => {
    try {
      const response = await createForm(name, surname, education, work);
      setName('');
      setSurname('');
      setEducation('');
      setWork('');
      console.log(response);
      navigate(USER_LIST_ROUTE);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = () => {
    setName('');
    setSurname('');
    setEducation('');
    setWork('');
  };

  const isCreateButtonDisabled = !name || !surname || !education || !work;

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                value={surname}
                onChange={handleSurnameChange}
              />
            </Form.Group>

            <Form.Group controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your education"
                value={education}
                onChange={handleEducationChange}
              />
            </Form.Group>

            <Form.Group controlId="formWork">
              <Form.Label>Work</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your work"
                value={work}
                onChange={handleWorkChange}
              />
            </Form.Group>

            <Button
              variant="success"
              type="button"
              onClick={createUserForm}
              disabled={isCreateButtonDisabled}
            >
              Create
            </Button>

            <Button
              variant="danger"
              type="button"
              onClick={handleDelete}
              className="ml-2"
            >
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyForm;
