import { Trash2 } from "lucide-react";
import { useCart } from "../../core/contexts/cart/cartContext";
import { ProductCartStorage } from "../../core/models/cart";

interface StorageCardProps {
    data: ProductCartStorage
}

export const StorageCard = ({ data: cartItem }: StorageCardProps) => {
    const { removeItemFromCart, updateCartItem } = useCart();
    return (
        <div className="md:h-[211px] flex flex-col md:flex-row rounded-lg overflow-hidden shadow bg-white">
            <div className="w-full h-[300px] md:w-[256px] bg-slate-400">
                <img src={cartItem.image_url} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{cartItem.name}</h1>
                    <button type="button" onClick={()=> removeItemFromCart(cartItem.id)}  className="w-11 h-11 text-red-500 rounded-full flex items-center justify-center">
                        <Trash2 size={24} strokeWidth={1.5} />
                    </button>
                </div>
                <p className="text-sm text-justify break-all line-clamp-3 ">{cartItem.description}</p>
                <div className="flex items-center justify-between">
                    <select value={cartItem.quantity} onChange={({ target })=> updateCartItem(cartItem, +target.value)
                    } className="p-2 min-w-14 border border-slate-300 rounded-md">
                        {Array.from({ length: 10}).map((_,index) => (
                            <option key={index} value={index}>{index}</option>
                        ))}
                    </select>
                    <div>
                        <span className="text-lg font-bold">{cartItem.price_in_cents}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}