import React from 'react';
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
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/marketplace/:itemId">
						<Item />
					</Route>
					<Route path="/marketplace">
						<ItemsList />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/signin">
						<Signin />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
