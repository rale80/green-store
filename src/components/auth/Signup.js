import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { MdLockOutline } from 'react-icons/md';

const Signup = props => {
	return (
		<div className="row">
			<div className="text-center mt-3 mx-auto col-md-6">
				<MdLockOutline size={42} color="#69bf1e" />
				<h1 className="font-weight-normal">SignUp</h1>
				<Form>
					<FormGroup>
						<Input
							className="py-4"
							type="name"
							name="name"
							placeholder="Name"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Input
							className="py-4"
							type="address"
							name="address"
							placeholder="Address"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Input
							className="py-4"
							type="tel"
							name="phone"
							placeholder="Phone"
							required
						/>
					</FormGroup>
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
					<Link className="float-right mt-2" to="/signin">
						Already have an account? Sign in
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Signup;
