import { IProduct } from "@/core/models/products";
import { axios } from "@/lib/axios.config";
import { AxiosPromise } from "axios";

export const findProducts = async (): AxiosPromise<IProduct[]> => {
    return await axios.get("/products");
}
