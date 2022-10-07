const { send } = require("micro");
const methods = require("micro-method-router");

module.exports = methods({
	async get(req, res) {
		return send(res, 200, `It's a GET request!`).json({
			body: req.body,
			query: req.query,
			cookies: req.cookies,
			message: "Soy el index",
		});
	},
	async post(req, res) {
		return send(res, 200, `It's a POST request!`);
	},
});
