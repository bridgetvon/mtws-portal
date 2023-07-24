import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import '../App.css';
import MyForm from '../components/Form/Form';

function Forum() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1> Help Desk </h1>
                        <div>
                            <h6> Help Tickets </h6>

                        </div>
                    </div>
                </Col>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>
                <MyForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Row>
        </Container>
    );
}

export default Forum;
