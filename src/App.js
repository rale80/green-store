import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import ItemsList from './components/items/ItemsList';
import Item from './components/items/Item';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/auth/PrivateRoute';
import AuthRoute from './components/auth/AuthRoute';
import { auth } from './firebase/firebase';
import './App.css';

function App() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user);
				localStorage.setItem('user', JSON.stringify(user));
			} else {
				setUser(null);
				localStorage.removeItem('user');
			}
		});
	}, [user]);

	const logoutUser = () => {
		auth
			.signOut()
			.then(() => {})
			.catch(err => console.log(err));

		setUser(null);
		localStorage.removeItem('user');
	};

	const userState = {
		user,
		logout: logoutUser
	};

	return (
		<UserProvider value={userState}>
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
							<PrivateRoute path="/marketplace/:itemId">
								<Item />
							</PrivateRoute>
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
		</UserProvider>
	);
}

export default App;
