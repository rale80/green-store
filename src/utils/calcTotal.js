export default function calcTotal(cart) {
	const total = cart.reduce((acc, curr) => {
		return acc + curr.price * Number(curr.quantity);
	}, 0);

	return total.toFixed(2);
}
