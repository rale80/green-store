import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase';
import Item from './Item';
import Spinner from '../spinner/Spinner';

const ItemsList = (props) => {
	const [itemsList, setItemsList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		firestore
			.collection('items')
			.get()
			.then((snapshot) => {
				setLoading(false);
				setItemsList(snapshot.docs);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="ItemsList">
			{loading && <Spinner />}
			<h1>Marketplace</h1>
			<h5 className="leading">When you done, go to cart to finish order</h5>
			<div className="row justify-content-around">
				{itemsList.map((item) => {
					return <Item key={item.id} itemId={item.id} item={item.data()} />;
				})}
			</div>
		</div>
	);
};

export default ItemsList;
