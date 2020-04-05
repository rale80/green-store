import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
import { firestore } from '../../firebase/firebase';
import calcTotal from '../../utils/calcTotal';

const Checkout = (props) => {
	const [userData, setUserData] = useState({});
	const { user } = useContext(UserContext);
	const { cart, clearCart } = useContext(CartContext);
	const { modal, toggle, finishOrder } = props;

	const order = () => {
		firestore
			.collection('orders')
			.add({
				userId: user.uid,
				total: calcTotal(cart),
				cart: cart,
			})
			.then(function (docRef) {
				clearCart();
				toggle();
				finishOrder();
			})
			.catch((err) => console.error('Error adding document: ', err));
	};

	useEffect(() => {
		firestore
			.collection('users')
			.doc(user.uid)
			.get()
			.then((user) => {
				setUserData(user.data());
			})
			.catch((err) => console.log(err));
	}, [user.uid]);

	return (
		<div className="Checkout">
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader className="bg-success" toggle={toggle}>
					Checkout
				</ModalHeader>
				<ModalBody>
					<div>
						<strong>Name:</strong> {userData.name}
					</div>
					<div>
						<strong>Email:</strong> {userData.email}
					</div>
					<div>
						<strong>Address:</strong> {userData.address}
					</div>
					<div>
						<strong>Phone:</strong> {userData.phone}
					</div>
					<div className="mt-3">
						<strong>Total:</strong> {calcTotal(cart)} $
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={order}>
						Order
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

Checkout.propTypes = {
	modal: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
	finishOrder: PropTypes.func.isRequired,
};

export default Checkout;
