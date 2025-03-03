import React from "react";
import { useState } from "react";


const SearchBarNav = () =>{
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return(
        <li className="hidden md:block">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className={`search-transition w-40 focus:w-60 px-4 py-2 pr-8 rounded-full border border-gray-300 dark:border-gray-600 focus:border-[#C34C5B] dark:focus:border-[#C34C5B] focus:ring-2 focus:ring-[#C34C5B]/20 focus:outline-none dark:bg-gray-700 dark:text-gray-100 transition-all duration-300`}
                                        placeholder="Search..."
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setIsSearchFocused(false)}
                                    />
                                    <button className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-300 hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">
                                        <Search className="h-5 w-5" />
                                    </button>
                                </div>
                            </li>
    )
}




export default SearchBarNav