import { useEffect, useState, ReactNode } from "react";
import { CartContext } from "./cartContext";
import { IProduct } from "@/core/models/products";
import { ProductCartStorage } from "@/core/models/cart";
import toast from "react-hot-toast";

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<ProductCartStorage[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart.capputeeno");
        if (storedCart) {
            const cartProducts: ProductCartStorage[] = JSON.parse(storedCart);
            setCartItems(cartProducts);
        }
    }, []);

    const addItemToCart = (cartItem: IProduct) => {
        setCartItems(prevCart => {
            const newCart: ProductCartStorage[] = [...prevCart, {...cartItem, quantity: 1}];
            localStorage.setItem("cart.capputeeno", JSON.stringify(newCart));
            return newCart;
        })
    };

    const removeItemFromCart = (cartItemID: string) => {
        setCartItems(prevCart => {
            const newCart = prevCart.filter(item => item.id !== cartItemID);
            localStorage.setItem("cart.capputeeno", JSON.stringify(newCart));
            return newCart;
        });
    };

    const completePurchase = () => {
        setCartItems([]);
        localStorage.removeItem("cart.capputeeno");
        toast.success("Compra finalizada", {
            duration: 3000,
            position: "top-center"
        });
    };

    const updateCartItem = (itemId: string, quantity: number) => {
        const newCart = cartItems.map(cartElement => 
            cartElement.id === itemId ? { 
                ...cartElement,  
                quantity: quantity 
            } : cartElement
        );
    
        setCartItems(newCart);
        localStorage.setItem("cart.capputeeno", JSON.stringify(newCart));
    };
    

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateCartItem, completePurchase }}>
            {children}
        </CartContext.Provider>
    );
};
