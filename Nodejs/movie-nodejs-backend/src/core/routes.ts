import express, { Express } from "express";
import userRouters from "../auth/user.controller";

const Routers = (app: Express) => {
	app.use(express.json());
	app.use("/api/v1/users", userRouters);
};

export default Routers;
