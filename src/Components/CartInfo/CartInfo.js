import React from 'react';
import './CartInfo.css';

const CartInfo = (props) => {
    console.log(props)
    const {cart} = props;

    let total = 0;
    let names = [];
    for(const person of cart){
        total = total + person.salary;
        names = [...names, person.name];
    }
    return (
        <div className= 'cart'>
            <h3>Count cart</h3>
            <p>Person Added: {cart.length}</p>
            <p>Total salary: ${total}</p>
            <p>Programmers: {names}</p>
        </div>
    );
};

export default CartInfo;