import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { IProduct } from "@/core/models/products";

interface ProductCardProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    data: IProduct,
    href: string,
}

export const ProductCard = ({ data, href, className, ...props }: ProductCardProps) => {
    return (
        <Link to={href}>
            <div className={cn("bg-white rounded-lg overflow-hidden shadow", className)} {...props}>
                <div className="h-72 bg-slate-400">
                    <img src={data.image_url} alt="" className="w-full h-full object-cover" loading="lazy"/>
                </div>
                <div className="p-4 divide-y divide-slate-300">
                    <span className="block line-clamp-1 text-base pb-1.5">{data.name}</span>
                    <span className="block font-bold text-black line-clamp-1 pt-1.5">{data.price_in_cents}</span>
                </div>
            </div>
        </Link>
    )
}