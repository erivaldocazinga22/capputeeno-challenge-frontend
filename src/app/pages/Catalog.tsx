import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ProductCard } from "@/app/components/ProductCard";
import { useProducts } from "@/core/hooks/products";
import { useSearch } from "@/core/contexts/search/searchContext";
import { CatalogMenu } from "@/core/constants/catalog";

export default function Catalog() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialType = searchParams.get("type") || "all";

    const [viewerCard, setViewerCard] = useState(initialType);

    const { data: baseProducts } = useProducts();
    const { searchText } = useSearch();

    useEffect(() => {
        const url = new URL(window.location.origin);
        if (viewerCard !== "all") {
            url.searchParams.set('type', viewerCard);
        } else {
            url.searchParams.delete('type');
        }
        window.history.pushState({}, '', url);
    }, [viewerCard]);

    const catalogBaseProducts = viewerCard === "all" ? 
        (baseProducts?.filter(baseProduct => 
            !searchText || baseProduct.name.toLowerCase().includes(searchText.toLowerCase()))
        ) : 
        (baseProducts?.filter(baseProduct => baseProduct.category === viewerCard)?.filter(baseProduct => 
            !searchText || baseProduct.name.toLowerCase().includes(searchText.toLowerCase()))
    );

    return (
        <div className="h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 lg:w-4/5 lg:mx-auto">
                <div className="h-20 flex flex-col sm:flex-row sm:items-center justify-between">
                    <nav>
                        <ul className="flex items-center gap-4">
                            {CatalogMenu.map(catalogMenuItem => (
                                <li 
                                    key={catalogMenuItem.id}  
                                    onClick={() => setViewerCard(catalogMenuItem.type)} 
                                    className="w-fit text-center cursor-pointer"
                                >
                                    <span>{catalogMenuItem.name}</span>
                                    <div className={cn("h-1 min-w-20 w-full bg-transparent", viewerCard === catalogMenuItem.type && "bg-capputeeno-Orange-Low")} />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden md:flex">
                        <select>
                            <option value="">Organizar por</option>
                            <option value="news">Novidades</option>
                            <option value="price-bigger-smaller">Preço: Maior - menor</option>
                            <option value="price-smaller-bigger">Preço: Menor - maior</option>
                            <option value="best-sellers">Mais vendidos</option>
                        </select>
                    </div>
                </div>
                <section className="space-y-6">
                    <div className="flex items-center justify-end">
                        <div className="flex items-center gap-2">
                            <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white border text-capputeeno-Orange-Low border-capputeeno-Orange-Low">1</button>
                            <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">2</button>
                            <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">3</button>
                            <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">4</button>
                            <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">5</button>
                            <button type="button">
                                <ChevronLeft size={20} strokeWidth={1.5} />
                            </button>
                            <button type="button">
                                <ChevronRight size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {catalogBaseProducts?.map((catalogBaseProduct) => (
                            <ProductCard key={catalogBaseProduct.id} href={`/product/${catalogBaseProduct.id}`} data={catalogBaseProduct} />
                        ))}
                    </div>
                </section>
                <div className="flex items-center justify-end my-10">
                    <div className="flex items-center gap-2">
                        <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white border text-capputeeno-Orange-Low border-capputeeno-Orange-Low">1</button>
                        <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">2</button>
                        <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">3</button>
                        <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">4</button>
                        <button type="button" className="w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white">5</button>
                        <button type="button">
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button type="button">
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}