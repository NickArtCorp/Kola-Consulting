import { useState } from "react";
// Assuming you have a Search icon component, e.g., from 'lucide-react' or similar
import { Search } from 'lucide-react'; // Or wherever your Search icon is located
import PropTypes from "prop-types";

/**
 * Composant réutilisable pour une barre de recherche de navigation.
 * Il gère l'input de l'utilisateur et déclenche une action de recherche.
 * L'état de la recherche et la logique d'application de la recherche doivent être
 * gérés par un composant parent.
 *
 * @param {string} searchQuery La valeur actuelle de la barre de recherche.
 * @param {function} setSearchQuery La fonction pour mettre à jour l'état de la recherche dans le composant parent.
 * @param {function} handleApplySearch La fonction pour déclencher la recherche dans le composant parent.
 */
const SearchBarNav = ({ searchQuery, setSearchQuery, handleApplySearch }) => {
    // État local pour gérer le focus de l'input
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Gère le changement de l'input et met à jour l'état du parent
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Gère la touche 'Enter' pour lancer la recherche
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleApplySearch();
            // L'ajout de e.target.blur() retire le focus après la recherche
            e.target.blur();
        }
    };

    return (
        <li className="hidden md:block">
            <div className="relative">
                <input
                    type="text"
                    className={`search-transition w-40 focus:w-60 px-4 py-2 pr-8 rounded-full border border-gray-300 dark:border-gray-600 focus:border-[#C34C5B] dark:focus:border-[#C34C5B] focus:ring-2 focus:ring-[#C34C5B]/20 focus:outline-none dark:bg-gray-700 dark:text-gray-100 transition-all duration-300`}
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-300 hover:text-[#C34C5B] dark:hover:text-[#C34C5B]"
                    onClick={handleApplySearch}
                >
                    <Search className="h-5 w-5" />
                </button>
            </div>
        </li>
    );
};

// Définition des PropTypes pour garantir une utilisation correcte
SearchBarNav.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    handleApplySearch: PropTypes.func.isRequired,
};

export default SearchBarNav;
