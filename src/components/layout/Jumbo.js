import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = props => {
	return (
		<Jumbotron>
			<h2 className="display-4">Your Health Supplier!</h2>
			<p className="lead">
				Our fruits and vegetables are grown on organic farms and treated just
				with natural remedies. They are carefully picked and brought to you by
				our transportation service.
			</p>
			<p className="lead">
				<Link to="/marketplace">
					<Button color="primary">Go to Store</Button>
				</Link>
			</p>
		</Jumbotron>
	);
};

export default Jumbo;
