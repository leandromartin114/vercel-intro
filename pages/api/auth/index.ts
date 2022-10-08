// const { send } = require("micro");
const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
	async post(req: NextApiRequest, res: NextApiResponse) {
		// return send(res, 200, `It's a GET request!`);
		res.status(200).json({ message: "soy auth", email: req.body.email });
	},
});
