const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
	async get(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).json({
			message: "product info",
			productId: req.query.productId,
		});
	},
});
