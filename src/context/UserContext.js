import React from 'react';

const UserContext = React.createContext({ user: null });
const UserProvider = UserContext.Provider;

export { UserContext, UserProvider };
