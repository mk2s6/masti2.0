function getUserFromLocal() {
	return JSON.parse(localStorage.getItem('user'));
}

function setUserToLocal(name, token) {
	return localStorage.setItem('user', JSON.stringify({ name, token }));
}

export { getUserFromLocal, setUserToLocal };
