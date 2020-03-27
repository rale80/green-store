export default function validate(values) {
	let errors = {};
	let isValid = false;

	const { name, address, phone, email, password } = values;

	if (!name) {
		errors.name = 'FullName field is required';
	} else if (!/^[ A-Za-z]+$/.test(name)) {
		errors.name = 'You are enter invalid character';
	} else if (name.length > 40) {
		errors.name = 'Name must be under 40 characters';
	}

	if (!address) {
		errors.address = 'Address field is required';
	} else if (address.length > 100) {
		errors.address = 'Address must be under 100 characters';
	}

	if (!phone) {
		errors.phone = 'Phone field is required';
	} else if (!/^[0-9]+$/.test(phone)) {
		errors.phone = 'You are enter invalid character';
	} else if (phone.length > 16) {
		errors.phone = 'Phone must be under 16 characters';
	}

	if (!email) {
		errors.email = 'Email address is required';
	} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
		errors.email = 'Enter valid email address';
	}

	if (!password) {
		errors.password = 'Password field is required';
	} else if (password.length < 8 || password.length > 80) {
		errors.password = 'Password must be between 8 and 80 characters';
	}

	Object.keys(errors).length === 0 && (isValid = true);

	return {
		errors,
		isValid
	};
}
