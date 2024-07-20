import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.Context';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from '../utils/auth/auth.api';

const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(userData);

	useEffect(() => {
		checkLogin(setUserData, setLoading);
	}, []);

	return (
		<AuthContext.Provider value={{ userData, setUserData, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

const checkLogin = async (setUserData, setLoading) => {
	const cookies = Cookies.get();

	if (!cookies.token) {
		setLoading(false);
		return;
	}

	try {
		const data = await verifyTokenRequest();

		if (!data) {
			setLoading(false);
			return;
		}

		setUserData(data);
		setLoading(false);
	} catch (error) {}
};

export default AuthProvider;
