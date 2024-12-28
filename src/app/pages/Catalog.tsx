import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ProductCard } from "@/app/components/ProductCard";
import { CatalogMenu } from "@/core/constants/catalog";
import { useProducts } from "@/core/hooks/products";

export default function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data } = useProducts();

    const viewerCard = searchParams.get("type") || "all";

    const limit = 9;
    const currentPage = parseInt(searchParams.get("page") ?? "1", 10);
    
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    

    const allProducts = data?.filter(product => viewerCard === "all" || product.category === viewerCard);
    const catalogBaseProducts = allProducts?.slice(startIndex, endIndex);

    const totalProductos = allProducts?.length ?? 0;
    const totalPage = Math.ceil(totalProductos / limit);
    
    const handleChangePage = (page: number) => {
        setSearchParams((params) => {
            params.set("page", `${page}`);
            return params;
        });
    };

    const handleChangeSearchParams = (type: string) => {
        setSearchParams((params) => {
            params.set("page", "1");
            params.set("type", type);
            return params;
        });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handleChangePage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            handleChangePage(currentPage + 1);
        }
    };

    return (
        <div className="h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 lg:w-4/5 lg:mx-auto">
                <div className="h-20 flex flex-col sm:flex-row sm:items-center justify-between">
                    <nav>
                        <ul className="flex items-center gap-4">
                            {CatalogMenu.map((catalogMenuItem) => (
                                <li
                                    key={catalogMenuItem.id}
                                    onClick={() => handleChangeSearchParams(catalogMenuItem.type)}
                                    className="w-fit text-center cursor-pointer"
                                >
                                    <span>{catalogMenuItem.name}</span>
                                    <div
                                        className={cn(
                                            "h-1 min-w-20 w-full bg-transparent",
                                            viewerCard === catalogMenuItem.type && "bg-capputeeno-Orange-Low"
                                        )}
                                    />
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
                    <div className="flex items-center justify-between">
                        <p><strong>{totalProductos}</strong> produtos em stock</p>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="p-2 bg-white border rounded-lg disabled:opacity-50"
                            >
                                <ChevronLeft size={20} strokeWidth={1.5} />
                            </button>

                            {Array.from({ length: totalPage }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleChangePage(index + 1)}
                                    className={cn(
                                        "w-8 h-8 rounded-lg font-medium flex items-center justify-center bg-white border",
                                        currentPage === index + 1 && "text-capputeeno-Orange-Low border-capputeeno-Orange-Low"
                                    )}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPage}
                                className="p-2 bg-white border rounded-lg disabled:opacity-50"
                            >
                                <ChevronRight size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {catalogBaseProducts?.map((catalogBaseProduct) => (
                            <ProductCard
                                key={catalogBaseProduct.id}
                                href={`/product/${catalogBaseProduct.id}`}
                                data={catalogBaseProduct}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
