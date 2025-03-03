import React, { useState } from "react";
import './Navbar.css';
import 'flowbite';
import { ThemeProvider } from "@material-tailwind/react";
import { DarkThemeToggle } from "flowbite-react";
import Logo from "../../Images/KolaConsulting.jpg";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
import '../../i18n';
import { Search } from 'lucide-react'; // Import the search icon


const Navbar = () => {
    const { t } = useTranslation();


    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownHovered(!isDropdownHovered);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <ThemeProvider>
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 w-full border-b  fixed top-0 left-0 z-50 backdrop-blur-lg bg-opacity-30 font-sans">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-4 h-20">
                    {/* Logo Section */}
                    <a href="/" className="flex items-center">
                        <img src={Logo} className="h-16" alt="Kola-Consulting Logo" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        data-collapse-toggle="mega-menu-full"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu-full"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 ">
                            {/* Navigation Links */}
                            <li>
                                <a href="/Kola-consulting/" className="nav-link block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B] md:p-0">{t('home')}</a>
                            </li>

                            {/* About Us Dropdown */}
                            <li className="relative">
                                <button 
                                    id="mega-menu-full-dropdown-button" 
                                    onClick={toggleDropdown} 
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C34C5B] md:p-0 dark:text-white md:dark:hover:text-[#C34C5B] dark:hover:bg-gray-700 dark:hover:text-[#C34C5B] md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    {t('aboutUs')} 
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {isDropdownHovered && (
                                    <div 
                                        id="mega-menu-full-dropdown" 
                                        className={`absolute left-0 top-[50px] w-[275px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 transition-all duration-300 ease-in-out backdrop-blur-md bg-opacity-60 border border-gray-200 dark:border-gray-700 
                                        ${isDropdownHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                        onMouseEnter={() => setIsDropdownHovered(true)}
                                        onMouseLeave={() => setIsDropdownHovered(false)}
                                    >
                                        <div className="grid px-4 py-5 text-gray-900 dark:text-white sm:grid-cols-1 md:px-6 ">
                                            <ul className="">
                                                <li>
                                                    <a href="/Kola-consulting/Insights" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            {t('insights')}
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Our_Team" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            {t('ourTeam')}
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Our_Code_Of_Ethics" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            {t('ourCodeOfEthics')}
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Kola-consulting/Contact" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            {t('contactUs')}
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li>
                                <a href="/Kola-consulting/Services" className="nav-link block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B] md:p-0">{t('services')}</a>
                            </li>
                            <li>
                                <a href="/Kola-consulting/Realisation" className="nav-link block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B] md:p-0">{t('realisation')}</a>
                            </li>

                            {/* Search Bar */}
                            <li className="hidden md:block">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className={`search-transition w-40 focus:w-60 px-4 py-2 pr-8 rounded-full border border-gray-300 dark:border-gray-600 focus:border-[#C34C5B] dark:focus:border-[#C34C5B] focus:ring-2 focus:ring-[#C34C5B]/20 focus:outline-none dark:bg-gray-700 dark:text-gray-100 transition-all duration-300`}
                                        placeholder={t('search')}
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setIsSearchFocused(false)}
                                    />
                                    <button className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-300 hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">
                                        <Search className="h-5 w-5" />
                                    </button>
                                </div>
                            </li>

                            {/* Theme Toggle */}
                            <li className="flex items-center">
                                <DarkThemeToggle className="focus:ring-[#C34C5B]" />
                            </li>

                            {/* Language Switcher */}
                            <li className="flex items-center">
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2">
                        {/* Mobile Search */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                className="w-full px-4 py-2 pr-8 rounded-full border border-gray-300 dark:border-gray-600 focus:border-[#C34C5B] dark:focus:border-[#C34C5B] focus:ring-2 focus:ring-[#C34C5B]/20 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
                                placeholder={t('search')}
                                onFocus={() => setIsSearchFocused(true)}
                            />
                            <button className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-300 hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                        {/* Your existing mobile menu items */}
                        <ul className="space-y-2">
                            <li>
                                <a href="/Kola-consulting/" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">{t('home')}</a>
                            </li>
                            <li>
                                <a href="/Kola-consulting/Services" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">{t('services')}</a>
                            </li>
                            <li>
                                <a href="/Kola-consulting/Realisation" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-[#C34C5B] dark:hover:text-[#C34C5B]">{t('realisation')}</a>
                            </li>
                            <li>
                                <button 
                                    id="mega-menu-full-dropdown-button" 
                                    onClick={toggleDropdown} 
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                >
                                    {t('aboutUs')} 
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isDropdownHovered && (
                                    <div 
                                        id="mega-menu-full-dropdown" 
                                        className={`w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 transition-all duration-300 ease-in-out backdrop-blur-md bg-opacity-60 border border-gray-200 dark:border-gray-700 
                                        ${isDropdownHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                        onMouseEnter={() => setIsDropdownHovered(true)}
                                        onMouseLeave={() => setIsDropdownHovered(false)}
                                    >
                                        <div className="grid px-4 py-5 text-gray-900 dark:text-white sm:grid-cols-1 md:px-6 ">
                                            <ul className="">
                                                <li>
                                                    <a href="/Kola-consulting/Insights" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="relative text-gray-900 dark:text-white group-hover:text-[#C34C5B] transition-all duration-300">
                                                            {t('insights')}
                                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C34C5B] transition-all duration-300 group-hover:w-full"></span>
                                                        </span>
                                                    </a>
                                                </li>
                                                {/* ...existing code... */}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </ThemeProvider>
    );
}

export default Navbar;
