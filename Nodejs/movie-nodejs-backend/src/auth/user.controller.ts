import { RequestHandler } from "express";
import { AppDataSource } from "../start/db_typeorm";
import { User } from "./entities/user.entity";

export const getUsers: RequestHandler = async (req, res) => {
	const userRepo = AppDataSource.getRepository(User);
	const users = await userRepo.find();

	return res.status(200).json({ users });
};
