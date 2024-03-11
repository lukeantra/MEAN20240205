import {
	Strategy as JwtStrategy,
	ExtractJwt,
	StrategyOptionsWithoutRequest,
} from "passport-jwt";
import passport from "passport";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { AppDataSource } from "../core/db_typeorm";

export const applyPassportStrategy = () => {
	const options: StrategyOptionsWithoutRequest = {
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.JWT_SECRET || "",
	};
	passport.use(
		new JwtStrategy(options, async (payload, done) => {
			console.log("payload: ", payload);
			try {
				const userRepository: Repository<User> =
					AppDataSource.getRepository(User);
				const user = await userRepository.findOne(payload.email);
				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			} catch (error) {
				console.log(error);
				return done(error, false);
			}
		})
	);
};

export default passport;
