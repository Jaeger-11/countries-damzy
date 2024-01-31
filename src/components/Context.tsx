"use client";

import  { useContext, createContext, useState} from 'react';
type defaultV = {
    filter: string,
    search: string,
    setSearch: any,
    setFilter: any
}
const defaultValue:defaultV = {
    filter: "",
    search: "",
    setFilter: "",
    setSearch: ""
}
const AppContext = createContext(defaultValue);

const AppProvider = ({children}:{children:React.ReactNode}) => {
        const [filter, setFilter] = useState<string>("");
        const [search, setSearch] = useState<string>(""); 
        // const selectFilter = (filt) => {
        //     setFilter(filt)
        // }
        return <AppContext.Provider
            value={{
                filter,
                search,
                setFilter,
                setSearch
            }}
        >
            {children}
        </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};