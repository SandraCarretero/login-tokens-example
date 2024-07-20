import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.Context';
import { useNavigate } from 'react-router-dom';
import Logout from '../components/logout/Logout';

const Profile = () => {
	const { userData } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			<div>
				<h1>{userData.username}</h1>
				<span>{userData.email}</span>
			</div>

			<button onClick={() => navigate('/')}>Go Back</button>
			<Logout />
		</>
	);
};

export default Profile;
