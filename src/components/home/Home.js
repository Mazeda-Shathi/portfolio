import React from 'react';
import { Card, CardGroup, Container, Form, Nav, Navbar } from 'react-bootstrap';
import img from '../port-picture-removebg-preview.png'
import Button from '@restart/ui/esm/Button';
import '../Banner.css'
import { HashLink } from 'react-router-hash-link';
import Contact from '../contact/Contact';
import { Link } from 'react-router-dom';
import MyProject from '../project/MyProject';
const Home = () => {
    return (
        <div>  <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="ms-auto">
                    <Nav.Link as={HashLink} to="home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="home#project">My Projects</Nav.Link>
                    <Nav.Link as={HashLink} to="home#contact">Contact me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            {/* banner */}
            <div className="banner">
                <img src={img} className="image"></img>
                <div className="pt-5 my-auto">
                    <div className="my-5">
                        <h5>Hello,I'm Mazeda</h5>
                        <h3 className="text-danger">Front-End Web Developer</h3><br />
                        <span>I like to craft and scalable frontend products with great user experiances</span><br />
                    </div>
                    {/* <Link to="https://drive.google.com/file/d/1t1iCTQzYkSacz1X80Xey_dVZRZMCkYUB/view?usp=sharing" className="resume">See my resume</Link> */}
                    <button className="resume">
                        <a className="resume" href="https://drive.google.com/file/d/1t1iCTQzYkSacz1X80Xey_dVZRZMCkYUB/view?usp=sharing" download="ResumeOfficial.pdf" target="_blank">
                            My Resume
                        </a>
                    </button>
                </div>
            </div>
            <MyProject />
            <Contact></Contact>
        </div>
    );
};

export default Home;