import { IProduct } from "./products";

export interface ProductCartStorage extends IProduct {
    quantity: number;
}