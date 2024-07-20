import { useContext } from 'react';
import Menu from '../menu/Menu';
import { AuthContext } from '../../contexts/Auth.Context';
import Logout from '../logout/Logout';

const Header = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<header>
			<Menu />
			{!userData && !loading && <h1>No usuario</h1>}
			{userData && !loading && (
				<>
					<h1>Hola {userData.username}</h1>
					<Logout />
				</>
			)}
		</header>
	);
};

export default Header;
