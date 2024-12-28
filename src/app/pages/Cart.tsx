import { useCart } from "../../core/contexts/cart/cartContext";
import { ButtonToBack } from "../components/ui/ButtonToBack";
import { Link } from "react-router-dom";
import { StorageCard } from "../components/StorageCard";

export default function Cart() {
    const { cartItems, completePurchase } = useCart();

    const SubTotal = cartItems.reduce((acc, cartItem)=> acc + cartItem.price_in_cents * cartItem.quantity, 0);
    const Frete = SubTotal > 25000 || SubTotal === 0 ? 0 : 1500;
    const Total = SubTotal === 0 ? SubTotal : SubTotal + Frete;

    return (
        <div className="px-2 xl:w-4/5 h-[calc(100vh-5rem)] lg:mx-auto text-black overflow-y-auto">
            <ButtonToBack className="my-4" />
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="space-y-4 flex-1 pb-4 h-[calc(100vh-8.6rem)] overflow-y-auto ">
                    <div>
                        <h1 className="text-2xl font-semibold uppercase">Seu carrinho</h1>
                        <p>Total ({cartItems.length} produtos) <span className="font-semibold">{Math.ceil(SubTotal).toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}</span></p>
                    </div>
                    {cartItems.map(cartItem => (
                        <StorageCard key={cartItem.id} data={cartItem} />
                    ))}
                </div>
                <div className="md:min-w-[350px] flex flex-col">
                    <div className="flex-1 space-y-6 text-black">
                        <h1 className="text-2xl  font-medium">Resumo do pedido</h1>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col w-full gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-nowrap">Subtotal de produtos</span>
                                    <span className="text-nowrap text-right">{SubTotal.toLocaleString("pt-AO", { style: "currency", currency: "AOA"})}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-nowrap">Entrega</span>
                                    <span className="text-nowrap text-right">{Frete.toLocaleString("pt-AO", { style: "currency", currency: "AOA"})}</span>
                                </div>
                            </div>
                            <span className="block w-full h-0.5 bg-slate-200"></span>
                            <div className="flex items-center justify-between">
                                <span className="text-nowrap font-semibold">Total</span>
                                <span className="text-nowrap text-right font-semibold">{Total.toLocaleString("pt-AO", { style: "currency", currency: "AOA"})}</span>
                            </div>
                        </div>

                        <button type="button" disabled={Total === 0} onClick={completePurchase} className="w-full px-4 py-2 rounded flex items-center justify-center gap-2 text-white bg-[#51B853] disabled:bg-[#51B853]/70 disabled:cursor-not-allowed">
                            Finalizar a compra
                        </button>
                    </div>
                    <div className="py-4">
                        <Link to="#"><span className="block w-fit underline uppercase text-sm mt-2">Ajuda</span></Link>
                        <Link to="#"><span className="block w-fit underline uppercase text-sm mt-2">reembolsos</span></Link>
                        <Link to="#"><span className="block w-fit underline uppercase text-sm mt-2">entregas e frete</span></Link>
                        <Link to="#"><span className="block w-fit underline uppercase text-sm mt-2">trocas e devoluções</span></Link>
                        <Link to="https://github.com/erivaldocazinga22" target="_blank"><span className="block w-fit underline uppercase text-sm mt-2">Area de Contactos</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}