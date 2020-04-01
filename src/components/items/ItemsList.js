import React, { useState, useEffect } from 'react';
import Item from './Item';
import { firestore } from '../../firebase/firebase';

const ItemsList = props => {
	const [itemsList, setItemsList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		firestore
			.collection('items')
			.get()
			.then(snapshot => {
				setLoading(false);
				setItemsList(snapshot.docs);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="ItemsList">
			{loading && <div>Loading...</div>}
			<h1>Marketplace</h1>
			<div className="row justify-content-around">
				{itemsList.map(item => {
					return <Item key={item.id} item={item.data()} />;
				})}
			</div>
		</div>
	);
};

export default ItemsList;
