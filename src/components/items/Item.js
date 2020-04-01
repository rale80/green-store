import React, { useState } from 'react';
import classNames from 'classnames';
import { MdAddShoppingCart } from 'react-icons/md';
import styles from './Item.module.css';

const Item = ({ image, name, price, type }) => {
	const [quantity, setQuantity] = useState(0);

	const addToCart = () => {};

	return (
		<div className={classNames(styles.Item, 'card')}>
			<div className={styles.imgWrapper}>
				<img className="card-img-top" src={`/img/${type}/${image}`} alt="" />
			</div>
			<div className="card-body">
				<h4>{name}</h4>
				<span>Price: {price}$</span>
				<input
					type="number"
					value={quantity}
					onChange={e => setQuantity(e.target.value)}
					placeholder="kg"
				/>
				<button onClick={addToCart}>
					<MdAddShoppingCart /> ADD
				</button>
			</div>
		</div>
	);
};

export default Item;
