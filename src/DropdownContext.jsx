import  {createContext, useState, useContext} from "react";


const DropdownContext = createContext();

const DropdownProvider = ({children}) => {
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);

    return (
        <DropdownContext.Provider value={{isDropdownHovered, setIsDropdownHovered}}>
            {children}
        </DropdownContext.Provider>
    );
};

export default DropdownProvider;
export const useDropdown = () => useContext(DropdownContext);