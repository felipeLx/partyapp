import React from 'react';
import { Form } from 'react-bootstrap';

import './Filter.css';

const Filter = () => {
    return (
        <div className="Filter">
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nome da empresa</Form.Label>
                <Form.Control type="text" placeholder="Doces da Vóvo" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Por tipo de serviço:</Form.Label>
                <Form.Control as="select">
                <option>Casa de Festas</option>
                <option>Serviço para Festas</option>
                <option>Comércio de produtos de festa</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Selecione os bairros</Form.Label>
                <Form.Control as="select" multiple>
                <option>Barra da Tijuca</option>
                <option>Recreio</option>
                <option>Botafogo</option>
                </Form.Control>
            </Form.Group>
            </Form>
        </div>
    );
};

export default Filter;