import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ENDPOINTS from '../../../lib/api-endpoints';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = () => {
    console.log('Login clicked');

    fetch(ENDPOINTS.POST_API_AUTH_LOGIN, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        ID,
        password
      })
    })
      .then(response => {
        if (response.ok) {
          setUser({
            authenticated: true,
            ID
          });
          navigate("/");
        }
        else 
          return response.json();
      })
      .then(json => {
        console.log(json.message)
        setErrMsg(json.message);
      })
      .catch(error => {
        setErrMsg(error);
        console.log(error);
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="아이디 입력"
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='mt-3'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleLogin} className='mt-3'>
              로그인
            </Button>

            <p className='mt-3 text-danger'>
              {errMsg}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
