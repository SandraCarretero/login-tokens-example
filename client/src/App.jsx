import Login from './components/login/Login';
import Register from './components/register/Register';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1>Register</h1>
			<Register />
			<h1>Login</h1>
			<Login />
		</>
	);
};

export default App;
