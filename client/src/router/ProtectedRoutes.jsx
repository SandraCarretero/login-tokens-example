import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.Context';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
	const { userData, loading } = useContext(AuthContext);

	if (loading) return <h1>Loading...</h1>;

	if (!userData) return <Navigate to='/login' />;

	return <Outlet />;
};

export default ProtectedRoutes;
