import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import ItemsList from './components/items/ItemsList';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import PrivateRoute from './components/auth/PrivateRoute';
import AuthRoute from './components/auth/AuthRoute';
import { auth, firestore } from './firebase/firebase';
import './App.css';

function App() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				firestore
					.collection('users')
					.doc(user.uid)
					.get()
					.then((snapshot) => {
						setUser(snapshot.data());
						localStorage.setItem('user', JSON.stringify(snapshot.data()));
					});
			} else {
				setUser(null);
				localStorage.removeItem('user');
			}
		});
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const logoutUser = () => {
		auth
			.signOut()
			.then(() => {})
			.catch((err) => console.log(err));

		setUser(null);
		localStorage.removeItem('user');
	};

	const addItemToCart = (cartItem) => {
		setCart([...cart, cartItem]);
	};

	const removeFromCart = (id) => {
		let newCart = [...cart];
		let foundIndex = newCart.findIndex((cartItem) => cartItem.itemId === id);
		newCart.splice(foundIndex, 1);
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const userState = {
		user,
		logout: logoutUser,
	};

	const cartState = {
		cart,
		addToCart: addItemToCart,
		removeFromCart: removeFromCart,
		clearCart: clearCart,
	};

	return (
		<UserProvider value={userState}>
			<CartProvider value={cartState}>
				<Router>
					<div className="App">
						<Header />
						<main className="container-md">
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<AuthRoute path="/signup">
									<Signup />
								</AuthRoute>
								<AuthRoute path="/signin">
									<Signin />
								</AuthRoute>
								<PrivateRoute path="/marketplace">
									<ItemsList />
								</PrivateRoute>
								<PrivateRoute path="/cart">
									<Cart />
								</PrivateRoute>
								<PrivateRoute path="/profile">
									<Profile />
								</PrivateRoute>
							</Switch>
						</main>
						<Footer />
					</div>
				</Router>
			</CartProvider>
		</UserProvider>
	);
}

export default App;
