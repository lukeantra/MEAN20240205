import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectToMongodb = () => {
	console.log(process.env.DB);
	const db: string = process.env.DB || "";
	mongoose
		.connect(db)
		.then((_) => {
			console.log(`Connected to ${db}...`);
		})
		.catch(console.log);
};
