import express, { RequestHandler, Request, Response } from "express";
import passport from "./passport-config";
import * as bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

import { AppDataSource } from "../core/db_typeorm";
import { User } from "./entities/user.entity";
import { UserRole } from "./enum/user-role.enum";
import { CheckEmailDto } from "./dto/check-email.dto";

const userRouters = express.Router();
const userRepo = AppDataSource.getRepository(User);

// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ private function;
const createToken = function (user: User) {
	const payload: JwtPayload = {
		id: user.id.toString(),
		username: user.username,
		email: user.email,
		tmdb_key: user.tmdb_key,
	};
	console.log("secret: ", process.env.JWT_SECRET);
	const accessToken: string = jwt.sign(
		payload,
		process.env.JWT_SECRET || "",
		{ expiresIn: "2h" }
	);
	return accessToken;
};

// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ API;
const signUp: RequestHandler = async (req, res) => {
	const { username, password, email, tmdb_key, role }: User =
		req.body;

	// 400: 'Bad Request';
	if (!(email && password))
		res.status(400).send("All input are required!");

	// 409: 'Conflict';
	if (!!(await userRepo.findOne({ where: { email } })))
		res.status(409).send("User Already Exist. Please Login");

	// hash the password;
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(password, salt);

	// create user;
	const user = userRepo.create({
		username,
		password: hashedPassword,
		email,
		tmdb_key,
		role: UserRole[role] || UserRole.USER,
	});

	try {
		await userRepo.save(user);
		const userfromdb = await userRepo.findOne({
			where: { email },
		});
		const accessToken = userfromdb ? createToken(userfromdb) : "";

		res.status(201).json({ accessToken, role: user.role });
	} catch (err: any) {
		if (err.code === "11000") {
			res.status(409).send("Username already exists");
		} else {
			res.status(500);
		}
	}
};

const checkEmail: RequestHandler = async function (req, res) {
	console.log(req.session);
	const user = await userRepo.findOne({
		where: { email: (req.body as CheckEmailDto).email },
	});
	if (user) {
		res.status(200).send(true);
	} else {
		res.status(200).send(false);
	}
};

const getUsers: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const users = await userRepo.find();
	res.status(200).json(users);
};

// * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Router;
userRouters.get(
	"/users",
	passport.authenticate("jwt", { session: false }),
	getUsers
);

userRouters.route("/signup").post(signUp);
userRouters.route("/check-email").post(checkEmail);

export default userRouters;
