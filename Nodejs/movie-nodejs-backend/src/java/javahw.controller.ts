import express, { Request, Response } from "express";
import axios from "axios";
const universityRouter = express.Router();

const getUniversities = async (req: Request, res: Response) => {
	const queryObj = { ...req.query } as { [key: string]: string };
	const baseUrl = `http://universities.hipolabs.com/search?`;

	const searchQuery = Object.entries(queryObj).reduce(
		(acc: string, cur: [string, string]) => {
			const [key, val] = cur;
			acc += `${key}=${val}&`;
			return acc;
		},
		""
	);
	const url = baseUrl + searchQuery;
	const result = await axios.get(url);

	res.status(200).json({ ok: true, data: result.data });
};

// http://localhost:5566/api/v1/universities?country=United+Kingdom
universityRouter.route("/").get(getUniversities);

export default universityRouter;
