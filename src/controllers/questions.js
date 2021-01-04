import axios from 'axios';

const getQuestions = async () => {
	try {
		const data = await axios.get('/api/questions/list');
		return Promise.resolve(data);
	} catch (e) {
		return Promise.reject(e.response);
	}
};

const getOptions = async (id) => {
	try {
		const data = await axios.get(`/api/questions/options/list/${id}`);
		return Promise.resolve(data);
	} catch (e) {
		return Promise.reject(e.response);
	}
};

export { getQuestions, getOptions };
