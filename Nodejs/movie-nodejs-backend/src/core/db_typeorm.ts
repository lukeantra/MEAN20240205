import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../auth/entities/user.entity";
dotenv.config();

export const AppDataSource = new DataSource({
	type: "mongodb",
	url: process.env.MODB_URL,
	useUnifiedTopology: true,
	useNewUrlParser: true,
	entities: [User],
	synchronize: true,
});

const TypeOrmDbConnection = () => {
	AppDataSource.initialize()
		.then(() => console.log(`connection successful!`))
		.catch((error) => console.log(error));
};

export default TypeOrmDbConnection;
