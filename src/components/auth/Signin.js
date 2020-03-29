import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { MdLockOutline } from 'react-icons/md';
import classNames from 'classnames';
import { auth } from '../../firebase/firebase';

const Signin = props => {
	const [values, setValues] = useState({
		email: '',
		password: ''
	});
	const [errors, setErrors] = useState({
		email: '',
		password: ''
	});
	const history = useHistory();

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submitFormSignin = e => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then(docRef => {
				history.push('/marketplace');
			})
			.catch(err => {
				if (err.code === 'auth/wrong-password') {
					setErrors({ ...errors, password: err.message });
				}
				if (err.code === 'auth/user-not-found') {
					setErrors({ ...errors, email: err.message });
				}
			});
	};

	const { email, password } = values;

	return (
		<div className="Signin">
			<div className="row">
				<div className="text-center mt-3 mx-auto col-md-6">
					<MdLockOutline size={42} color="#69bf1e" />
					<h1 className="font-weight-normal">SignIn</h1>
					<Form noValidate onSubmit={submitFormSignin}>
						<FormGroup>
							<Input
								type="email"
								name="email"
								value={email}
								onChange={handleChange}
								className={classNames('py-4', {
									'is-invalid': errors.email
								})}
								placeholder="Email"
								required
							/>
							{errors.email && (
								<div className="invalid-feedback">{errors.email}</div>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="password"
								name="password"
								value={password}
								onChange={handleChange}
								className={classNames('py-4', {
									'is-invalid': errors.password
								})}
								placeholder="Password"
								required
							/>
							{errors.password && (
								<div className="invalid-feedback">{errors.password}</div>
							)}
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
