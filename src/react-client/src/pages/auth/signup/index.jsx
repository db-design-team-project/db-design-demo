// Signup.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [residentNumber, setResidentNumber] = useState('');
    const [education, setEducation] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signup clicked');
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호 입력"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>이름</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="이름 입력"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicResidentNumber">
                            <Form.Label>주민등록번호</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="주민등록번호 입력"
                                value={residentNumber}
                                onChange={(e) => setResidentNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEducation">
                            <Form.Label>최종학력</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="최종학력 입력"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleSignup}
                            className='mt-3'>
                            회원가입
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
