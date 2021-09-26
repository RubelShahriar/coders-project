import React, { useEffect, useState } from 'react';
import CartInfo from '../CartInfo/CartInfo';
import PersonInfo from '../PersonInfo/PersonInfo';
import './Person.css'

const Person = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./person.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    },[]);

    const addToCart = person => {
        const newCart = [...cart, person];
        setCart(newCart);
    };

    return (
        <div className= 'container'>
            <div className= 'person-container'>
                {
                    persons.map(person => <PersonInfo 
                        key = {person.key}
                        person = {person}
                        addToCart = {addToCart}
                    ></PersonInfo>)
                }
            </div>
            <div className= 'cart-container'>
                <CartInfo cart = {cart}></CartInfo>
            </div>
        </div>
    );
};

export default Person;