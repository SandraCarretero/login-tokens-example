import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../utils/auth/auth.api';

const Register = () => {
	const navigate = useNavigate();
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' name='username' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' id='password' name='password' />
				</div>
				<input type='submit' value='Register User' />
			</form>
			<button onClick={() => navigate('/')}>Go Back</button>
		</>
	);
};

const handleSubmit = async event => {
	event.preventDefault();
	const { username, email, password } = event.target;
	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};
	const serverMessage = await registerRequest(newUser);
	console.log(serverMessage);
};

export default Register;
