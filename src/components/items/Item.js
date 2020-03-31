import React from 'react';
import classNames from 'classnames';
import { MdAddShoppingCart } from 'react-icons/md';
import styles from './Item.module.css';

const Item = props => {
	const { image, name, price, type } = props.item;

	return (
		<div className={classNames(styles.Item, 'card')}>
			<div className={styles.imgWrapper}>
				<img className="card-img-top" src={`/img/${type}/${image}`} alt="" />
			</div>
			<div className="card-body">
				<h4>{name}</h4>
				<span>Price: {price}$</span>
				<input type="number" placeholder="kg" />
				<button>
					<MdAddShoppingCart /> ADD
				</button>
			</div>
		</div>
	);
};

export default Item;
