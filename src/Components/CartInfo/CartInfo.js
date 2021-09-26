import React from 'react';
import './CartInfo.css';

const CartInfo = (props) => {
    console.log(props)
    const {cart} = props;

    let total = 0;
    let names = [ ];
    for(const person of cart){
        total = total + person.salary;
        names = [...names, person.name];
    }
    return (
        <div>
            <h3>Person Added: {props.cart.length}</h3>
            <h4>Total salary: ${total}</h4>
            <h4>Total salary: {names}</h4>
        </div>
    );
};

export default CartInfo;