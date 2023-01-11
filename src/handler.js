const jokes = require('./jokes');

const getJokeHandler = (req, res) => {
	return res.response({
		status: 'success',
		data: jokes[Math.floor(Math.random() * jokes.length)]
	}).code(200);
};

const anyMethodHandler = (req, res) => {
		const response = res.response({
				status: 'fail',
				message: 'route yang tersedia hanya /joke dan /motivasi',
		});

		response.code(404);
		return response;
};

module.exports = { getJokeHandler, anyMethodHandler };