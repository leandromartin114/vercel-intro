const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
	async post(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).json({ message: "soy MP", code: req.body.code });
	},
});
