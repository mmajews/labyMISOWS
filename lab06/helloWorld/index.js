var os = require('os');

exports.handler = async (event) => {
    	const hostname = os.hostname();
		const response = {
			statusCode: 200,
			body: JSON.stringify('Hello World' + hostname)
		}
		return response;
};
