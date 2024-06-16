import { createContext, useContext } from "react";
import { IProduct } from "@/core/models/products";
import { ProductCartStorage } from "@/core/models/cart";


interface CartContextValues {
    cartItems: ProductCartStorage[],
    addItemToCart: (product: IProduct) => void,
    updateCartItem: (cartItem: ProductCartStorage, quantity: number) => void,
    removeItemFromCart: (productId: string) => void,
    completePurchase: () => void
}

export const CartContext = createContext<CartContextValues>({} as CartContextValues);
export const useCart = () => useContext(CartContext);