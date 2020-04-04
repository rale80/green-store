import React from 'react';
import { Media, Button } from 'reactstrap';
import styles from './Subtotal.module.css';
import calcTotal from '../../utils/calcTotal';

const Subtotal = ({ cart, showCheckout }) => {
	return (
		<Media className={styles.Subtotal}>
			<Media body>
				<Media heading>Subtotal</Media>
				<em className={styles.SubtotalValue}>{calcTotal(cart)} $</em>
			</Media>
			<Media right>
				<Button onClick={() => showCheckout()}>Checkout</Button>
			</Media>
		</Media>
	);
};

export default Subtotal;
