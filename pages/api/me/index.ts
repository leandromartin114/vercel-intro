const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
	async get(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).json({
			message: "user info",
			token: req.headers.authorization,
		});
	},
	async patch(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).json({
			message: "info modificada",
			email: req.body.email,
			fullName: req.body.fullName,
		});
	},
});
