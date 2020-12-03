import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../Header/Button";
import emptyCart from "../../../assets/img/empty-cart.png"

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая</h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <NavLink to="/" >
                <Button className="button button--black">
                    <span>Вернуться назад</span>
                </Button>
            </NavLink>
        </div>
    )
};

export default CartEmpty;