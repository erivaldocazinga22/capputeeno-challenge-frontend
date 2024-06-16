import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./utils";

export function useProducts() {
    const query = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts
    });

    return {
        ...query,
        data: query.data?.data.data.allProducts
    }
}