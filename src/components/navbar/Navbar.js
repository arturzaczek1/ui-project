import React from 'react';
import './navbar.css'
import avatar from '../../images/account_avat.png';

const NavBar = (props) => {

    let basketList = props.basket.map(basketItem => <p>{basketItem.name}, rozmiar: {basketItem.size} : cena: {basketItem.price}</p>);
    
    return (
        <div className="nav-bar">
            <div className="left-nav"><img className="nav-avatar" src={avatar} alt="avatar"></img>{props.customer.name}</div>
        <div className="right-nav">Suma: {props.basketSum === 0 ? "Twój koszyk jest jeszcze pusty" : props.basketSum + " zł"}</div>
        </div>
    );
};

export default NavBar;