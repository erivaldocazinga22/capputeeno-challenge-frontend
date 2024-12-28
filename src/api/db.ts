import jsonServer from "json-server";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";
import path from "node:path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "..", "..", "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors({
    origin: "*"
}))
server.use(middlewares);
server.use(router);

export default (req: VercelRequest, res: VercelResponse) => {
    if (req.method === 'GET') {
        return res.status(200).json({
            message: "hello"
        });
    } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
    }
};
