import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create context and set default values.
const UserContext = createContext({
	user: null,
	login: () => {},
});

export const UserContextProvider = ({ children }) => {
	const users = [
		{
			name: 'Sandra Tan',
			role: 'Citizen',
			color: '#87d068',
		},
		{
			name: 'Robert Pham',
			role: 'Government',
			color: '#8193E7',
		},
		{
			name: 'Weiying Lee',
			role: 'Security',
			color: '#8193E7',
		},
		{
			name: 'Rihhan',
			role: 'Vaccination',
			color: '#8193E7',
		},
	];

	const [user, setUser] = useState(users[1]);

	const router = useRouter();

	useEffect(() => {
		if (user.role === 'broker') {
			router.push('/common/transfer');
		} else if (user.role === 'bank') {
			router.push('/common/loans');
		} else if (user.role === 'borrower') {
			router.push('/borrower/transfer');
		} else if (user.role === 'guest') {
			router.push('/guest/register-broker');
		}
	}, [user]);

	const login = (role) => {
		if (role === 'broker') {
			setUser(users[0]);
		} else if (role === 'bank') {
			setUser(users[1]);
		} else if (role === 'borrower') {
			setUser(users[2]);
		} else if (role === 'guest') {
			setUser(users[3]);
		}
	};

	const context = { user, login };

	return (
		<UserContext.Provider value={context}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
