import React, {createContext, useState, useContext} from "react";


const DropdownContext = createContext();

export const DropdownProvider = ({children}) => {
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);

    return (
        <DropdownContext.Provider value={{isDropdownHovered, setIsDropdownHovered}}>
            {children}
        </DropdownContext.Provider>
    );
};

export const useDropdown = () => useContext(DropdownContext);