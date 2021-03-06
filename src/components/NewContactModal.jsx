import React, { useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useContacts } from '../Contexts/ContactsContext';

export default function NewContactModal({ closeModal }) {
    const idRef = useRef()
    const nameRef = useRef()

    const { createContact } = useContacts()


    function handleSubmit(e){
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Contact modal</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group style={{ marginBottom: '15px' }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required />
                    </Form.Group>
                    <Button type='submit'>Create</Button>
                </Form>
               
            </Modal.Body>
        </>
    );
}
