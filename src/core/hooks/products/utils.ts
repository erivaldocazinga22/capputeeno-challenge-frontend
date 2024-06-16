import axios, { AxiosPromise } from "axios";
import { ProductResponseData } from "@/core/models/products";
import { env } from "@/lib/env.config";

export const getAllProducts = async (): AxiosPromise<ProductResponseData> => {
    const query = `
            query {
                allProducts {
                    id
                    name
                    description
                    image_url
                    category
                    price_in_cents
                    sales
                    created_at
                }
            }
    `;
    return axios.post<ProductResponseData>(env.VITE_ROCKETSEAT_URL, { query });
}