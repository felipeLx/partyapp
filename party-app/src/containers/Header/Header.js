import React from 'react';
import { Card, Button } from 'react-bootstrap';

import "./Header.css";

const customers = [
    {name: "Casa Festa", img: "assets/img/cs_festa.jpg", description: "Somos a melhor casa de festa"}, 
    {name: "Docinhos", img: "assets/img/serv.png", description: "Docinhos da vóvo"}, 
    {name: "Loja para Festa", img: "assets/img/store.png", description: "Aqui encontra o que precisa."}, 
];

const Header = () => (
    <div className="Header">
        
        <h1>Festa para Todos</h1>
        <div className="row Cards">
        {customers.map((customer) => {
            return (
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={customer.img} />
                <Card.Body>
                    <Card.Title>{customer.name}</Card.Title>
                    <Card.Text>
                    {customer.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>)
        })}
        </div>
    </div>
);

export default Header;