import React, { useContext } from 'react';
import classNames from 'classnames';
import { CartContext } from '../../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ cartItemData }) => {
	const { itemId, name, quantity, price, type } = cartItemData;
	const { removeFromCart } = useContext(CartContext);

	return (
		<div
			className={classNames(
				styles.CartItem,
				'd-flex flex-wrap justify-content-between mb-3'
			)}>
			<img
				src={`/img/${type}/${name.toLowerCase()}_thumb.jpg`}
				alt="Cart Item Thumb"
			/>
			<div className="">
				<h3>{name}</h3>
				<p>
					{quantity} x {price} $
				</p>
			</div>
			<button
				onClick={() => removeFromCart(itemId)}
				className="btn align-self-start rounded-circle bg-danger border-0">
				X
			</button>
		</div>
	);
};

export default CartItem;
