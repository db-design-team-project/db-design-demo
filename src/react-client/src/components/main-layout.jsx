import 'bootstrap/dist/css/bootstrap.css';
import { useContext, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import ENDPOINTS from '../lib/api-endpoints';
import Avatar from 'react-avatar';

function Header() {
    const { user } = useContext(UserContext);

    function handleLogout() {
        fetch(ENDPOINTS.GET_API_AUTH_LOGOUT, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    console.log("로그아웃 성공");
                    window.location.reload();
                }
                else
                    console.log("로그아웃 실패");
            })
            .catch(error => console.log(error));
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">8조 DEMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">홈</Nav.Link>

                        <NavDropdown title="직원" id="basic-nav-dropdown"
                            className='m'>
                            <NavDropdown.Item as={Link} to="/notfound">
                                직원관리
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/notfound">
                                직원휴가
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/notfound">
                                휴가페이지2
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="부서" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/notfound">
                                부서관리
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/notfound">
                                부서지원금
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="프로젝트" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="project/management" className='text-decoration-none text-reset'>
                                프로젝트 관리
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/notfound">
                                평가 관리
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="휴가" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/notfound">
                                휴가신청
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="vacation/management" className='text-decoration-none text-reset'>
                                휴가관리
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="ml-auto">

                        {!!user.authenticated ?
                            (
                                <>
                                    <Avatar src='https://www.mju.ac.kr/sites/mjukr/images/main/btn_chat_over1.png' color={"green"} size="40" name={user.ID} round={true} />
                                    <Nav.Link as={Link} to="/auth/login" onClick={handleLogout}>로그아웃</Nav.Link>
                                </>
                            )
                            : (
                                <>
                                    <Nav.Link as={Link} to="/auth/login">로그인</Nav.Link>
                                    <Nav.Link as={Link} to="/auth/signup">회원가입</Nav.Link>
                                </>
                            )}
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
            <div className='position-fixed'
                style={{
                    backgroundImage: `url('https://www.mju.ac.kr/sites/mjukr/intro/images/logo.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '85vh',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}></div>
            <div className="m-0 p-0 z-1">
                <Container fluid="md" className='p-3 text-center'>
                    {props.children}
                </Container>
            </div >
        </>
    )
}
