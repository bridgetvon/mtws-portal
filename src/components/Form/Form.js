import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

const MyForm = () => {


    return (
        <div id='height-control'>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label text="light" id="form-label-txt">Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Submitted By: </Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Owner</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Type </Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>MTWS Release</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Date Created</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Date Closed</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Initial Description</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Upload Files</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Button variant="outline-success" className='m-4'>
                    Save Changes
                </Button>
            </Form>
        </div>
    )
};

export default MyForm;