import axios from 'axios';

async function registerQuiz(quiz) {
	try {
		const res = await axios.post('/api/quiz/add/token', { quiz: quiz });
		return Promise.resolve(res);
	} catch (e) {
		return Promise.reject(e.response);
	}
}

export { registerQuiz };
