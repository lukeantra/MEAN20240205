import express from "express";
import { getUsers } from "../auth/user.controller";
const router = express.Router();

router.get("/user", getUsers);
