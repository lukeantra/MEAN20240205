import express, { RequestHandler, Request, Response } from "express";
import { AppDataSource } from "../core/db_typeorm";
import { User } from "./entities/user.entity";
const userRouters = express.Router();

const getUsers: RequestHandler = async (req, res) => {
	console.log("hello");
	const userRepo = AppDataSource.getRepository(User);
	const users = await userRepo.find();

	res.status(200).send({ users });
};

const createUser: RequestHandler = async (
	req: Request,
	res: Response
) => {
	console.log(req.body);
	res.status(201).json({ ...req.body });
};

const deleteUser: RequestHandler = (req, res) => {
	// req.params.id
};

userRouters.route("/").get(getUsers).post(createUser);
// userRouters.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default userRouters;
