import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { MdLockOutline } from 'react-icons/md';

const Signin = props => {
	return (
		<div className="Signin">
			<div className="row">
				<div className="text-center mt-3 mx-auto col-md-6">
					<MdLockOutline size={42} color="#69bf1e" />
					<h1 className="font-weight-normal">SignIn</h1>
					<Form>
						<FormGroup>
							<Input
								className="py-4"
								type="email"
								name="email"
								placeholder="Email"
								required
							/>
						</FormGroup>
						<FormGroup>
							<Input
								className="py-4"
								type="password"
								name="password"
								placeholder="Password"
								required
							/>
						</FormGroup>
						<Button className="btn-block py-2">Submit</Button>
						<Link className="float-right mt-2" to="/signup">
							Already have an account? Sign up
						</Link>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Signin;
