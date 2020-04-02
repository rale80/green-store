import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { MdAddShoppingCart } from 'react-icons/md';
import {
	Card,
	CardBody,
	CardImg,
	CardTitle,
	CardText,
	Button
} from 'reactstrap';
import { CartContext } from '../../context/CartContext';
import styles from './Item.module.css';

const Item = ({ item, itemId }) => {
	const [quantity, setQuantity] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const { addToCart } = useContext(CartContext);
	const { image, name, price, type } = item;

	const handleChange = e => {
		setQuantity(e.target.value);
		setDisabled(false);
	};
	const handleClick = e => {
		if (Number(quantity) > 0) {
			addToCart({ itemId, name, quantity, price, type });
			setDisabled(true);
		}
	};

	return (
		<Card className={classNames(styles.Item, disabled ? styles.Ordered : '')}>
			<div className={styles.imgWrapper}>
				<CardImg
					top
					width="100%"
					src={`/img/${type}/${image}`}
					alt="Item image"
				/>
			</div>
			<CardBody>
				<CardTitle style={{ fontSize: '26px', fontWeight: 'bold' }}>
					{name}
				</CardTitle>
				<CardText>
					<span>Price: {price}$</span>
					<input
						type="number"
						value={quantity}
						onChange={handleChange}
						placeholder="kg"
					/>
					<Button disabled={disabled} onClick={handleClick}>
						<MdAddShoppingCart /> ADD
					</Button>
				</CardText>
			</CardBody>
		</Card>
	);
};

export default Item;
