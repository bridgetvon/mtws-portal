import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Card, Stack } from "react-bootstrap";
import '../../App.css';
import MyForm from '../../components/Form/Form'
import MyTable from "../../components/Table/Table";

function HelpDesk() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 id="forum-title" className="mt-4"> Help Desk </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ color: '#fff' }}>
                            <Card.Body>
                                <Card.Title>Help Tickets</Card.Title>
                                <MyTable />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ color: '#fff' }}>
                            <Card.Body>
                                <Card.Title>Help Tickets</Card.Title>
                                <MyForm />
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