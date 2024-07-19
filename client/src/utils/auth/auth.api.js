import { HEADERS } from '../../constants/headers';
import { URLS } from '../../constants/urls';

export const registerRequest = async user => {
	try {
		const response = await fetch(URLS.AUTH_REGISTER, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(user)
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error en la solicitud de registro:', error);
		throw error;
	}
};

export const loginRequest = async (user, setUserData) => {
	try {
		const response = await fetch(URLS.AUTH_LOGIN, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(user),
			credentials: 'include' // Para que se envíe el token automáticamente
		});

		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}

		const data = await response.json();
		setUserData(data);
	} catch (error) {
		console.error('Error en la solicitud de inicio de sesión:', error.message);
		throw error;
	}
};
