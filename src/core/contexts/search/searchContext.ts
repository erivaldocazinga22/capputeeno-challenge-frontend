import { createContext, useContext } from "react";

interface SearchContextValues {
    searchText: string,
    FilterSearchFn: (searchText: string) => void,
}
export const SearchContext = createContext({} as SearchContextValues);
export const useSearch = () => useContext(SearchContext);