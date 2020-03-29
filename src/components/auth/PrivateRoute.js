import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	const userCtx = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={props => (userCtx.user ? children : <Redirect to="/signin" />)}
		/>
	);
};

export default PrivateRoute;
