import React, { createContext } from 'react';

const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
	return (
		<UserContext.Provider value={{ user: null }}>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.context = UserContext;

export default UserProvider;
