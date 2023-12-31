import React from "react";
import { Col, CardGroup, Container, Form, Row, Button, Card, Stack } from "react-bootstrap";
import './Forum.css';
import HelpDeskImg from '../../Images/HelpDesk.png';
import Resources from '../../Images/Resources.png';

function Forum() {
    return (
        <>
            <Row className="g-0 mt-5">
                <Col>
                </Col>
                <Col sm={6} id="questions-col">
                    <h1 style={{ color: 'white', padding: '10px' }}>All Questions</h1>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="Ask a new question..." />
                        <Button variant="success">Submit</Button>
                        <div className="vr" />
                    </Stack>

                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>How to add assets to submarine?</Card.Title>
                            <Card.Text id="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="pe-0">
                            <Card.Link href="#">Reply</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>Initializing a unit</Card.Title>
                            <Card.Text id="card-text">
                                A erat nam at lectus urna. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Adipiscing tristique risus nec feugiat in.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Reply</Card.Link>

                        </Card.Body>
                    </Card>
                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>Entity Locate Shape is not drawing correctly, how do I fix it?</Card.Title>
                            <Card.Text id="card-text">
                                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Volutpat consequat mauris nunc congue nisi. Volutpat odio facilisis mauris sit amet massa vitae tortor.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Reply</Card.Link>

                        </Card.Body>
                    </Card>
                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>Vehicles are not being populated with consumables </Card.Title>
                            <Card.Text id="card-text">
                                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Volutpat consequat mauris nunc congue nisi. Volutpat odio facilisis mauris sit amet massa vitae tortor.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Reply</Card.Link>

                        </Card.Body>
                    </Card>
                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text id="card-text">
                                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Volutpat consequat mauris nunc congue nisi. Volutpat odio facilisis mauris sit amet massa vitae tortor.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Reply</Card.Link>

                        </Card.Body>
                    </Card>
                    <Card text="light" id="card">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text id="card-text">
                                Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Volutpat consequat mauris nunc congue nisi. Volutpat odio facilisis mauris sit amet massa vitae tortor.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Reply</Card.Link>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card text="light" id='side-card'>
                        <Card.Title id='side-card-title' className="mb-4 m-1 ps-0"> Additional Help</Card.Title>
                        <Card.Img variant="top" src={HelpDeskImg} id="card-img" />
                        <Card.Body>
                            <Card.Text id="card-text">
                                For help you can call the MTWS help hotline at (123)-456-7891 & email at MTWSHelp@mtws-mrki.net, or
                            </Card.Text>
                            <Button id="card-btn" variant="outline-light" text="light">
                                Contact Here
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card text="light" id='side-card'>
                        <Card.Title id='side-card-title' className="mb-4 m-1 ps-0"> MTWS-MRKI Resources </Card.Title>
                        <Card.Img variant="top" src={Resources} id="card-img" />
                        <Card.Body>
                            <Card.Text id="card-text">
                                MTWS-MRKI Resources are currently available here.
                            </Card.Text>
                            <Button id="card-btn" variant="outline-light" text="light">
                                View Resources
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Forum;