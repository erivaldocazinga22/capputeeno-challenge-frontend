import { Search } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useSearch } from "../../../core/contexts/search/searchContext";

interface SearchFilterProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder?: string
}

export const SearchFilter = ({placeholder="Procurando por algo específico?", className, ...props}: SearchFilterProps) => {
    const { FilterSearchFn } = useSearch();

    return (
        <div className={cn("max-w-80 px-2 py-2 flex items-center gap-2 rounded-md bg-white", className)} {...props}>
            <input type="search" id="search_input_filter_products"
                placeholder={placeholder}
                className="h-full px-2 outline-none text-sm placeholder:text-capputeeno-100 text-black"
                onChange={({ target }) => FilterSearchFn(target.value)}
            />
            <label htmlFor="search_input_filter_products">
                <Search size={24} strokeWidth={1.5} className="cursor-text"/>
            </label>
        </div>
    )
}