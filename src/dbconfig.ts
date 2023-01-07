const env = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `.env.${env}` });

const mysqlDBConfig = {
  client: "mysql2",
  connection: {
    host: process.env.MYSQL_DB_HOST,
    port: 3306,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
  },
};

export default mysqlDBConfig;
