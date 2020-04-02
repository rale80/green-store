import React, { useContext } from 'react';
import { Jumbotron } from 'reactstrap';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import Subtotal from './Subtotal';

const Cart = props => {
	const { cart } = useContext(CartContext);

	let cartItems;
	let subTotal;
	if (cart.length > 0) {
		cartItems = cart.map(cartItemData => (
			<CartItem key={cartItemData.itemId} cartItemData={cartItemData} />
		));
		subTotal = <Subtotal cart={cart} />;
	} else {
		cartItems = (
			<Jumbotron>
				<h3 className="display-5">You have not added any items to order.</h3>
				<p className="lead">Go to marketplace and choose what you need.</p>
			</Jumbotron>
		);
		subTotal = null;
	}

	return (
		<div className="Cart">
			<h1>Cart</h1>
			<div className="d-md-flex flex-wrap justify-content-between">
				{cartItems}
			</div>
			{subTotal}
		</div>
	);
};

export default Cart;
