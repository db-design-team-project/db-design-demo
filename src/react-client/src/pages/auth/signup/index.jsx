// Signup.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ENDPOINTS from '../../../lib/api-endpoints';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [residentNumber, setResidentNumber] = useState('');
    const [education, setEducation] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        console.log('Signup clicked');

        fetch(ENDPOINTS.POST_API_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                ID,
                password,
                fullName,
                residentNumber,
                education
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.succeeded === true) {
                    console.log(json.message);
                    navigate("/auth/login");
                }
                else if (json.succeeded === false) {
                    setErrMsg(json.message);
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="아이디 입력"
                                value={ID}
                                onChange={(e) => setID(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='mt-4'>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호 입력"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicFullName">
                            <Form.Label className='mt-4'>이름</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="이름 입력"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicResidentNumber">
                            <Form.Label className='mt-4'>주민등록번호</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="주민등록번호 입력"
                                value={residentNumber}
                                onChange={(e) => setResidentNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEducation">
                            <Form.Label className='mt-4'>최종학력</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="최종학력 입력"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleSignup}
                            className='mt-4'>
                            회원가입
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

export default Signup;
