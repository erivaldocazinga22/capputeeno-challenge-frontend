import { useQuery } from "@tanstack/react-query";
import { findProducts } from "./utils";

export function useProducts() {
    const queryProducts = useQuery({
        queryKey: ["products"],
        queryFn: findProducts
    })

    return {
        ...queryProducts,
        data: queryProducts.data?.data
    };
}