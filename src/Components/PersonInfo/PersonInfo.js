import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './PersonInfo.css';

const PersonInfo = (props) => {
    const {name, occupassion, age, image, country, salary } = props.person;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className= 'personinfo'>
            <div>
            <img src= {image} alt=" " />
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Ocupassion: {occupassion}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
            <button onClick= {() => props.addToCart(props.person)}>{icon}Add to cart</button>
        </div>
        </div>
    );
};

export default PersonInfo;