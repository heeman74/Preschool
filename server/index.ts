import express from "express";
import { setupDbConnection } from "./src/db/models";

import next from "next";
const port = parseInt((process.env as any).PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const startServer = async () => {
  try {
    await app.prepare();
    await setupDbConnection();

    const server = express();
    server.get("/*", async (req: any, res, next) => {
      try {
        req.locals = {};
        req.locals.context = {};
        app.render(req, res, "/");
      } catch (e) {
        next(e);
      }
    });
    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
