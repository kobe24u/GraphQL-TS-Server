import "reflect-metadata";
import { DataSource } from "typeorm";

const env = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `.env.${env}` });

export const MySQLNBADataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_DB_HOST,
  port: 3306,
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/graphql/DB/DBEntities/*.ts"], // Need absolute path
  migrations: [],
  subscribers: [],
  entityPrefix: "NBA",
});

export default MySQLNBADataSource;
