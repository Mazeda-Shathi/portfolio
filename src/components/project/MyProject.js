import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import '../Banner.css'
import p1 from '../p1.jpg';
import p2 from '../p2.jpg';
import p3 from '../p3.jpg';
const MyProject = () => {
    return (
        <div id="project">
            <h3 className="text-danger fs-2  pt-5  mx-auto my-4 text-center">My Projects</h3>
            <Container fluid className="text-center">
                <CardGroup className="d-flex">
                    <Card className="project">
                        <Card.Img variant="top" src={p1} className="img-fluid" />
                        <Card.Text className="project-details">
                            <h4 className="text-danger text-center">Travelling Bangladesh</h4>
                            <h5 className="">Key Features</h5>
                            <p>1.Authentication Procress.<br />2.Admin panel.<br />3.Protected Pages.</p>
                            <p>React,js,Node.js,firebase,Context API,React Router,MongoDB</p>
                            <a href="https://tour-a3222.web.app/" target="_blank" className="m-2">Preview</a>
                            <a href="https://github.com/Mazeda-Shathi/tour-client" className="m-2">Client Site</a>
                            <a href="https://github.com/Mazeda-Shathi/tour-server" className="m-2">Server site</a>
                        </Card.Text>


                    </Card>
                    <Card className="project">
                        <Card.Img variant="top" src={p2} className="img-fluid" />
                        <Card.Text className="project-details">
                            <h4 className="text-danger text-center">Delight Sun Clinic</h4>
                            <h5 className="">Key Features</h5>
                            <p>1.Authentication Procress.<br />3.Protected Pages.</p>
                            <p>React,js,Node.js,firebase,Context API,React Router</p>
                            <a href="https://medical-6b499.web.app/" target="_blank" className="m-2">Preview</a>
                            <a href="https://github.com/Mazeda-Shathi/medical" className="m-2">Client site</a>
                        </Card.Text>

                    </Card>
                    <Card className="project">
                        <Card.Img variant="top" src={p3} className="img-fluid" />
                        <Card.Body>
                            <Card.Text className="project-details">
                                <h4 className="text-danger text-center">Kids Learning Home</h4>
                                <h5 className="">Key Features</h5>
                                <p>1.Contains course,service,teachers.</p>
                                <p>React,js,Node.js</p>
                                <a href="https://kidslearninghome.netlify.app/" target="_blank" className="m-2"> Preview</a>
                                <a href="https://github.com/Mazeda-Shathi/kids-course" className="m-2">Client-site</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

        </div >
    );
};

export default MyProject;