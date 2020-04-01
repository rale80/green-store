import React from 'react';
import classNames from 'classnames';
import styles from './CartItem.module.css';

const CartItem = props => {
	return (
		<div
			className={classNames(styles.CartItem, 'd-flex justify-content-between')}>
			<img src="/img/fruits/bananas_thumb.jpg" alt="..." />
			<div className="">
				<h2>Banana</h2>
				<p>2 x 5.00</p>
			</div>
			<button>X</button>
		</div>
	);
};

export default CartItem;
