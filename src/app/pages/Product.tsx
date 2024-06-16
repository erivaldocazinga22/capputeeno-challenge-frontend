import { ShoppingBag } from "lucide-react";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { useProducts } from "@/core/hooks/products";
import { useCart } from "@/core/contexts/cart/cartContext";
import { ButtonToBack } from "@/app/components/ui/ButtonToBack";

export default function Product() {
    const location = useLocation();
    const prodId = location.pathname.split("/")[2];

    const { cartItems, addItemToCart } = useCart();
    const { data: AllProducts } = useProducts();
    
    return (
        <div className=" md:mb-0 px-2 lg:w-4/5 lg:mx-auto h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="my-4">
                <ButtonToBack />
            </div>
            {AllProducts?.map((product)=> product.id === prodId && (
                <div className="flex flex-col md:flex-row gap-4 mb-5" key={product.id}>
                    <div className="flex-1 w-full min-h-[10rem] min-w-[10rem] md:h-[calc(100vh-5rem-5rem)] rounded-md flex items-center justify-center overflow-hidden bg-slate-400">
                        <img src={product.image_url} alt="" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="md:w-[400px] flex flex-col gap-4">
                        <div className="flex-1 space-y-10">
                            <div className="space-y-4">
                                <legend>{product.name.split(" ")[0]}</legend>
                                <h1 className="text-2xl">{product.name}</h1>
                                <span className="block text-lg font-bold">{product.price_in_cents}</span>
                                <p className="text-sm font-medium text-justify">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            </div>

                            <div>
                                <span className="block text-lg font-medium mb-2">Descrição</span>
                                <p className="text-sm text-justify">{product.description}</p>
                            </div>
                        </div>
                        <button type="button" disabled={cartItems.filter(cartItem => cartItem.id === product.id).length > 0} 
                            onClick={() => addItemToCart(product)} 
                            className={cn("w-full px-4 py-2 rounded flex items-center justify-center gap-2 disabled:cursor-not-allowed text-white bg-[#115D8C]", 
                                cartItems.filter(cartItem => cartItem.id === product.id).length > 0 && "opacity-50"
                            )}>
                            <ShoppingBag size={24} strokeWidth={1.5} />
                            {cartItems.filter(cartItem => cartItem.id === product.id).length > 0 
                                ? <span>Produto no carrinho</span> 
                                : <span>Adicionar ao carrinho</span>
                            }
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}