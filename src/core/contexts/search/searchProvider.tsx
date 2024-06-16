import { useState, ReactNode } from "react";
import { SearchContext } from "./searchContext";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState("");

  const FilterSearchFn = (searchText: string) => setSearchText(searchText);

  return (
    <SearchContext.Provider value={{ searchText, FilterSearchFn}}>
      {children}
    </SearchContext.Provider>
  );
};
