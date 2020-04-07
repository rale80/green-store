import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { firestore } from '../../firebase/firebase';
import Order from './Order';
import Spinner from '../spinner/Spinner';
import ProfileData from './ProfileData';

const Profile = (props) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useContext(UserContext);

	useEffect(() => {
		setLoading(true);
		firestore
			.collection('orders')
			.where('userId', '==', user.id)
			.get()
			.then((snapshot) => {
				setLoading(false);
				setOrders(snapshot.docs);
			});
	}, [user.id]);

	let ordersData;
	if (loading) {
		ordersData = <Spinner />;
	} else {
		ordersData = orders.map((order, id) => (
			<Order key={order.id} id={id} order={order.data()} />
		));
	}

	return (
		<div className="Profile row mt-2">
			<div className="col-md-6">
				<h3 className="mb-3">Profile Info</h3>
				<ProfileData user={user} />
			</div>
			<div className="col-md-6">
				<h3 className="mb-3">Orders</h3>
				{ordersData}
			</div>
		</div>
	);
};

export default Profile;
