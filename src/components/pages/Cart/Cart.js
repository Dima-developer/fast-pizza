import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearCart, removeCartItem, plusCartItem, minusCartItem} from "../../../redux/actions/cartAction"
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";

let Cart = () => {
    const dispatch = useDispatch();
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?'))
        dispatch(removeCartItem(id));
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    };
    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    };

    return (
        <div className="content">
            <div className="container container--cart">
                {
                    totalCount
                        ? <CartFull
                            totalPrice={totalPrice}
                            totalCount={totalCount}
                            items={items}
                            onClearCart={onClearCart}
                            onRemoveItem={onRemoveItem}
                            onPlusItem={onPlusItem}
                            onMinusItem={onMinusItem}
                        />
                        : <CartEmpty/>
                }
            </div>
        </div>
    )
}

export default Cart;