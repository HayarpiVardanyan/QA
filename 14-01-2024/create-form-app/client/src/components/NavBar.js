import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate(); 

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        navigate(LOGIN_ROUTE);
    };

    return (
        <Navbar style={{ backgroundColor: '#59bd5f', color: 'white' }} variant="dark">
            {user.isAuth ?
                <Nav className="ml-auto justify-content-end" style={{ color: 'white' }}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className="ml-2"
                    >
                        Log out
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto justify-content-end" style={{ color: 'white' }}>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Log In</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;



