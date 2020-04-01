import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';
import Basket from '../../images/basket.jpg';
import { Link } from 'react-router-dom';

const CtaCard = props => {
	return (
		<div>
			<Card>
				<CardImg top width="100%" src={Basket} alt="Basket image" />
				<CardBody>
					<CardTitle>How to order?</CardTitle>
					<CardText>
						Register or login if you have account, pick our fresh fruits and
						vegetables and complete order. When we receive order we are going to
						ship it to your address within 2 hours.
					</CardText>
					<Link to="/signup">
						<Button color="success" className="mr-2">
							SignUp
						</Button>
					</Link>
					<Link to="/signin">
						<Button color="success">SignIn</Button>
					</Link>
				</CardBody>
			</Card>
		</div>
	);
};

export default CtaCard;
