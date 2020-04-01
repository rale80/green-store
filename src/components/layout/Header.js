import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button
} from 'reactstrap';
import Logo from '../../images/logo.png';
import { UserContext } from '../../context/UserContext';

const Header = props => {
	const [isOpen, setIsOpen] = useState(false);
	const userCtx = useContext(UserContext);
	const { user, logout } = userCtx;

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="Header">
			<header>
				<Navbar style={{ padding: '5px 15%' }} color="info" light expand="md">
					<NavbarBrand tag={Link} to="/">
						<img height="" src={Logo} alt="Logo" />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{user ? (
								<>
									<NavItem>
										<NavLink tag={Link} to="/profile">
											Profile
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink tag={Link} to="/marketplace">
											Marketplace
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink tag={Link} to="/cart">
											Cart
										</NavLink>
									</NavItem>
									<NavItem>
										<Button color="link" className="nav-link" onClick={logout}>
											SignOut
										</Button>
									</NavItem>
								</>
							) : (
								<>
									<NavItem>
										<NavLink tag={Link} to="/signup">
											SignUp
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink tag={Link} to="/signin">
											SignIn
										</NavLink>
									</NavItem>
								</>
							)}
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		</div>
	);
};

export default Header;
