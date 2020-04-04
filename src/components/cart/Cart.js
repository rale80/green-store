import React, { useState, useContext } from 'react';
import { Jumbotron } from 'reactstrap';
import { MdStar } from 'react-icons/md';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import Subtotal from './Subtotal';
import Checkout from './Checkout';

const Cart = props => {
	const [modal, setModal] = useState(false);
	const [ordered, setOrdered] = useState(false);
	const { cart } = useContext(CartContext);

	const toggle = () => setModal(!modal);
	const finishOrder = () => setOrdered(true);

	let cartItems;
	let subTotal;
	if (cart.length > 0) {
		cartItems = cart.map(cartItemData => (
			<CartItem key={cartItemData.itemId} cartItemData={cartItemData} />
		));
		subTotal = <Subtotal cart={cart} showCheckout={toggle} />;
	} else {
		if (!ordered) {
			cartItems = (
				<Jumbotron>
					<h3 className="display-5">You have not added any items to order.</h3>
					<p className="lead">Go to marketplace and choose what you need.</p>
				</Jumbotron>
			);
		} else {
			cartItems = (
				<div className="d-flex w-75 my-5 mx-auto pt-3 px-5 border border-success rounded">
					<MdStar className="text-success" style={{ fontSize: '40px' }} />
					<div className="d-flex flex-column ml-2">
						<h3 className="text-success">Success!!!</h3>
						<p className="lead">Your order has been accepted.</p>
					</div>
				</div>
			);
		}
		subTotal = null;
	}

	return (
		<div className="Cart">
			<h1>Cart</h1>
			<div className="d-md-flex flex-wrap justify-content-between">
				{cartItems}
			</div>
			{subTotal}
			<Checkout modal={modal} toggle={toggle} finishOrder={finishOrder} />
		</div>
	);
};

export default Cart;
