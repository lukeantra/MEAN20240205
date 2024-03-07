import express from "express";
import dotenv from "dotenv";
import TypeOrmDbConnection from "./core/db_typeorm";
import Routers from "./core/routes";

const app = express();
dotenv.config();

TypeOrmDbConnection();
Routers(app);

const port = process.env.PORT || 4231;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

/* 
  & init project, install express;
  $ npm init
  $ npm i express
  & nodemon with ts;
  $ npm install -D nodemon typescript ts-node
  & edit tsconfig.json;
    "outDir": "./dist"  
  & add start and build in package.josn;
  	"start": "npx nodemon --exec ts-node ./src/app.ts",
		"build": "tsc"
  & dotenv to use process.env;
  $ npm install dotenv
  $ npm install --save-dev @types/dotenv

  & mongoose;
  $ npm install mongoose
  $ npm install --save-dev @types/mongoose
  & mySql;
  $ npm install typescript @types/node mysql2
  $ npm install --save-dev @types/mysql
  & TypeOrm;
  $ npm install typeorm mysql reflect-metadata
  $ npm install --save-dev typescript @types/node ts-node

*/
