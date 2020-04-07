import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Order.css';

const Order = (props) => {
	const { order, id } = props;
	const [showOrder, setShowOrder] = useState(false);

	return (
		<div>
			<div className="d-flex justify-content-between mb-3 p-2 bg-dark text-light">
				<strong>#{id + 1}</strong>
				<p>Total: {order.total} $</p>
				<button
					onClick={() => setShowOrder(!showOrder)}
					className="btn btn-sm btn-outline-primary">
					{showOrder ? 'Hide Order' : 'Show Order'}
				</button>
			</div>

			<CSSTransition
				in={showOrder}
				timeout={200}
				unmountOnExit
				mountOnEnter
				classNames="slide">
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Item Name</th>
								<th scope="col">Quantity</th>
								<th scope="col">Price</th>
							</tr>
						</thead>
						<tbody>
							{order.cart.map((item) => (
								<tr key={item.name}>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{item.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CSSTransition>
			{/* {showOrder && (
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Item Name</th>
								<th scope="col">Quantity</th>
								<th scope="col">Price</th>
							</tr>
						</thead>
						<tbody>
							{order.cart.map((item) => (
								<tr key={item.name}>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{item.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)} */}
		</div>
	);
};

export default Order;
