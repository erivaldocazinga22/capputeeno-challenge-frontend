import Axios from "axios";
import { env } from "./env.config";

export const axios = Axios.create({
    baseURL: env.VITE_ROCKETSEAT_URL
});