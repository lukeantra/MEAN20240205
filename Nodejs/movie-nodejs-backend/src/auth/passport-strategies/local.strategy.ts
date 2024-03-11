import { Strategy as LocalStrategy } from "passport-local";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../../core/db_typeorm";

const customFields = {
	usernameField: "uname",
	passwordField: "pw",
};

const verifyCallback = async (payload, done) => {
	try {
		const userRepository: Repository<User> =
			AppDataSource.getRepository(User);
		const user = await userRepository.findOne({
			where: { email: payload.email },
		});

		if (!user) {
			return done(null, false);
		}
		const isValid = validPassword(password, user.hash, user.salt);

		if (isValid) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	} catch (error) {
		console.log(error);
		return done(error, false);
	}
};

const strategy = new LocalStrategy();
