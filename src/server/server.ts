import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import * as cookie from "cookie-parser";
import { createConnection } from "typeorm";
import { notFound } from "./middleware/error/notFound";
import { Uniqueness } from "../core/utils";

export class Server {
  private port: number;
  private app: express.Application;
  constructor(port: number, app: express.Application) {
    this.port = port;
    this.app = app;
  }
  uses() {
    this.app.use(cors());
    this.app.use(express.json({ limit: "1000mb" }));
    this.app.use(cookie());
    this.app.use(express.static("src/server/public"));
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );

  }
  async init() {
    createConnection()
      .then(async (connection) => {
        this.uses();
        this.app.use(notFound);
      })
      .catch((e) => console.log(e));
  }
}
