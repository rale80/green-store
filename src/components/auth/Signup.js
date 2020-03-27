import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { MdLockOutline } from 'react-icons/md';
import classNames from 'classnames';
import { auth, firestore } from '../../firebase/firebase';
import validate from '../../validate/validateSignup';

const Signup = props => {
	const [values, setValues] = useState({
		name: '',
		address: '',
		phone: '',
		email: '',
		password: ''
	});
	const [errors, setErrors] = useState({
		name: '',
		address: '',
		phone: '',
		email: '',
		password: ''
	});
	const history = useHistory();

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submitFormSignup = e => {
		e.preventDefault();
		const { errors, isValid } = validate(values);

		setErrors(errors);
		if (isValid) {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then(cred => {
					return firestore
						.collection('users')
						.doc(cred.user.uid)
						.set({ name, address, phone, email });
				})
				.then(docRef => {
					console.log(docRef);
					history.push('/marketplace');
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	const { name, address, phone, email, password } = values;

	return (
		<div className="row">
			<div className="text-center mt-3 mx-auto col-md-6">
				<MdLockOutline size={42} color="#69bf1e" />
				<h1 className="font-weight-normal">SignUp</h1>
				<Form noValidate onSubmit={submitFormSignup}>
					<FormGroup>
						<Input
							type="name"
							name="name"
							value={name}
							onChange={handleChange}
							className={classNames('py-4', {
								'is-invalid': errors.name
							})}
							placeholder="Name"
							required
						/>
						{errors.name && (
							<div className="invalid-feedback">{errors.name}</div>
						)}
					</FormGroup>
					<FormGroup>
						<Input
							type="address"
							name="address"
							value={address}
							onChange={handleChange}
							className={classNames('py-4', {
								'is-invalid': errors.address
							})}
							placeholder="Address"
							required
						/>
						{errors.address && (
							<div className="invalid-feedback">{errors.address}</div>
						)}
					</FormGroup>
					<FormGroup>
						<Input
							type="tel"
							name="phone"
							value={phone}
							onChange={handleChange}
							className={classNames('py-4', {
								'is-invalid': errors.phone
							})}
							placeholder="Phone"
							required
						/>
						{errors.phone && (
							<div className="invalid-feedback">{errors.phone}</div>
						)}
					</FormGroup>
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
					<Link className="float-right mt-2" to="/signin">
						Already have an account? Sign in
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Signup;
