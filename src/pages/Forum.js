import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import '../App.css';
import MyForm from '../components/Form/Form';
import MyTable from "../components/Table/Table";

function Forum() {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1> Help Desk </h1>
                        <div>
                            <h6> Help Tickets </h6>
                            <MyTable />
                        </div>
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
