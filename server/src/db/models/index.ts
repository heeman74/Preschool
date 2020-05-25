import { Sequelize } from "sequelize";
// import logger from "../config/winston-loggers";

// const {
//   DATABASE_URL,
//   DATABASE_USERNAME,
//   DATABASE_PASSWORD,
//   DATABASE_PORT,
// } = process.env;

const sequelize = new Sequelize("Preschool", "postgres", "nameeh74", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false,
});

export const setupDbConnection = async () => {
  let connected = false;

  // Loop until we have a valid db connection
  while (!connected) {
    try {
      await sequelize.authenticate();
      connected = true;
    } catch (error) {
      //   if (error instanceof Sequelize.ConnectionRefusedError) {
      //     if (!hasLoggedError) {
      //       logger.error(
      //         "Unable to connect to cITopus Postgres database, is Postgres started?"
      //       );
      //       // No need to spam the console
      //       hasLoggedError = true;
      //     }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw error;
    }
  }

  await sequelize.sync();
};

export default sequelize;
