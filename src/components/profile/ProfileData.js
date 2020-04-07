import React from 'react';

const ProfileData = ({ user }) => {
	return (
		<div>
			<p>Name: {user.name}</p>
			<p>Address: {user.address}</p>
			<p>Phone: {user.phone}</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default ProfileData;
