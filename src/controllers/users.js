import axios from 'axios';

async function registerUser(name) {
	try {
		const res = await axios.post('/api/quiz/add/token', { ui_name: name });
		return Promise.resolve(res);
	} catch (e) {
		return Promise.reject(e.response);
	}
}

export { registerUser };
