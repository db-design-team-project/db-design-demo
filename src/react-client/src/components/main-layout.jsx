import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">8조 DEMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="/auth/login">로그인</Nav.Link>
                        <Nav.Link href="/auth/signup">회원가입</Nav.Link>

                        <NavDropdown title="직원" id="basic-nav-dropdown"
                            className='m'>
                            <NavDropdown.Item href="#action/3.1">
                                직원관리
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                직원휴가
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                휴가페이지2
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="부서" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                부서관리
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                부서지원금
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="프로젝트" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="project/management" className='text-decoration-none text-reset'>
                                    프로젝트 관리
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="">
                                평가 관리
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="휴가" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                휴가신청
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="vacation/management" className='text-decoration-none text-reset'>
                                    휴가관리
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default function MainLayout(props) {

    return (
        <>
            <Header />
            <div className="m-0 p-0 min-vh-100">
                <Container fluid="md" className='p-3 text-center'>
                    {props.children}
                </Container>
            </div>
        </>
    )
}
