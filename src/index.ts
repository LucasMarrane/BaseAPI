import * as express from "express";
import {Server} from "./server/server";

const port = Number.parseInt(process.env.PORT) || 8080;
new Server(port, express()).init();