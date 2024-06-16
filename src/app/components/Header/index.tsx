import { ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { SearchFilter } from "./SearchFilter";
import { useCart } from "@/core/contexts/cart/cartContext";

export const Header = () => {
    const { cartItems } = useCart();
    const location = useLocation();

    return (
        <header className="w-full h-20 flex items-center justify-center bg-white">
            <div className="w-full px-6 lg:w-4/5 flex items-center justify-between">
                <Link to="/">
                    <h1 className="text-4xl lg:text-4.5xl text-capputeeno-200 font-medium font-Saira-Stencil-One transition-['font-size'] duration-200">capputeeno</h1>
                </Link>
                
                <nav className="flex items-center gap-4">
                    {location.pathname === "/" && <SearchFilter className="hidden md:flex"/>}
                    <Link to="/cart">
                        <div className="relative w-11 h-11 rounded-full cursor-pointer flex items-center justify-center bg-white">
                            <ShoppingBag size={24} strokeWidth={1.5} />
                            {cartItems.length > 0 && <span className="absolute right-1.5 bottom-1.5 w-4 h-4 rounded-full flex items-center justify-center text-xs text-white bg-red-500">{cartItems.length}</span>}
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}