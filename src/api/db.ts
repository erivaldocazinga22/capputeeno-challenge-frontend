import jsonServer from "json-server";
import { VercelRequest, VercelResponse } from "@vercel/node";
import path from "node:path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "..", "..", "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req: VercelRequest, res: VercelResponse) => {
    return server(req, res);
};
