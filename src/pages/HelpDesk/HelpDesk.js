import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Card, Stack, Modal } from "react-bootstrap";
import '../../App.css';
import MyForm from '../../components/Form/Form'
import MyTable from "../../components/Table/Table";
import { FaCheck, FaRegFlag, FaExchangeAlt, FaRegEdit, FaSearch } from "react-icons/fa";
import {BiSupport} from 'react-icons/bi';
import {AiFillBug} from 'react-icons/ai';

function HelpDesk() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 id="forum-title" className="mt-4"> MTWS-MRKI Help Desk </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} className="mt-3">
                        <Stack>
                            <Form.Control className="me-auto" id="search-input" placeholder="Search for..." />
                            <Button variant="outline-light">
                                <FaSearch style={{ marginRight: '5px', marginBottom: '2px', marginTop:'3px' }}  />
                                Search</Button>
                            <Button variant="outline-success" onClick={handleShow}>
                                <FaRegEdit style={{ marginRight: '5px' }} />
                                New help ticket
                            </Button>
                            <Modal show={show} onHide={handleClose} animation={true} border="light">
                                <Modal.Header style={{ border: '1px solid #fff' }} closeButton closeVariant="white">
                                </Modal.Header>
                                <Modal.Body style={{ border: '1px solid #fff' }}>
                                    <Card style={{ color: '#fff' }}>
                                        <Card.Body>
                                            <Card.Title> New Help Ticket</Card.Title>
                                            <MyForm />
                                        </Card.Body>
                                    </Card>
                                </Modal.Body>
                                <Modal.Footer style={{ border: '1px solid #fff', background: '#2a2a2a' }}>
                                    <Button variant="outline-danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="outline-success" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant="outline-secondary" onClick={handleShow}>
                                <FaCheck style={{ marginRight: '5px' }}/>
                                New Action Item
                            </Button>
                            <Modal show={show} onHide={handleClose} animation={true} border="light">
                                <Modal.Header style={{ border: '1px solid #fff' }} closeButton closeVariant="white">
                                </Modal.Header>
                                <Modal.Body style={{ border: '1px solid #fff' }}>
                                    <Card style={{ color: '#fff' }}>
                                        <Card.Body>
                                            <Card.Title> New Help Ticket</Card.Title>
                                            <MyForm />
                                        </Card.Body>
                                    </Card>
                                </Modal.Body>
                                <Modal.Footer style={{ border: '1px solid #fff', background: '#2a2a2a' }}>
                                    <Button variant="outline-danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="outline-success" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant="outline-primary" onClick={handleShow}>
                                <FaRegFlag style={{ marginRight: '7px' }} />
                                New Update
                            </Button>
                            <Modal show={show} onHide={handleClose} animation={true} border="light">
                                <Modal.Header style={{ border: '1px solid #fff' }} closeButton closeVariant="white">
                                </Modal.Header>
                                <Modal.Body style={{ border: '1px solid #fff' }}>
                                    <Card style={{ color: '#fff' }}>
                                        <Card.Body>
                                            <Card.Title> New Help Ticket</Card.Title>
                                            <MyForm />
                                        </Card.Body>
                                    </Card>
                                </Modal.Body>
                                <Modal.Footer style={{ border: '1px solid #fff', background: '#2a2a2a' }}>
                                    <Button variant="outline-danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="outline-success" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant="outline-danger" onClick={handleShow}>
                                <AiFillBug style={{ marginRight: '5px' }}/>
                               Bug Report
                            </Button>
                            <Button variant="outline-warning" onClick={handleShow}>
                                <FaExchangeAlt style={{ marginRight: '5px' }}/>
                                Change Request
                            </Button>
                            <Button variant="outline-info" onClick={handleShow}>
                                <BiSupport style={{ marginRight: '5px' }}/>
                                Tech Support
                            </Button>
                        </Stack>
                    </Col>
                    <Col id='help-col'>
                        <Card style={{ color: '#fff' }}>
                            <Card.Body>
                                <Card.Title>Help Tickets</Card.Title>
                                <MyTable />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Card text="light">
                            <Card.Body>
                                <Card.Title>
                                    Updates and Action Items
                                </Card.Title>
                                <Stack direction="horizontal" gap={3}>
                                    <Form.Control className="me-auto" placeholder="Add your item here..." />
                                    <Button variant="success">Submit</Button>
                                    <div className="vr" />
                                    <Button variant="outline-danger">Reset</Button>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HelpDesk;