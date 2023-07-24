import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import '../App.css';
import MyForm from '../components/Form/Form';

function Forum() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1> Help Desk </h1>
                    </div>
                </Col>
                <Col>
                    <MyForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Forum;
