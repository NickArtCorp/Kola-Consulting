import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Dropdown, TextInput, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";

const SearchBar = ({ searchQuery, setSearchQuery, selectedVideoType, setSelectedVideoType, setAppliedSearchQuery }) => {
  const typingRef = useRef(null);

  const handleSearchClick = () => {
    setAppliedSearchQuery(searchQuery); // Apply search only when button is clicked
  };

  const { t } = useTranslation();

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Every Idea", "We Transform"],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 300,
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg w-[900px] mx-auto mt-32 mb-2">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        <span ref={typingRef}></span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 p-6 shadow-lg bg-gray-50 rounded-lg">
        {/* Dropdown pour le type de vidéo */}
        <Dropdown label={t(selectedVideoType.charAt(0).toUpperCase() + selectedVideoType.slice(1).toLowerCase() || t("choose"))} inline>
          {["All", t("service1"), t("service2"), t("service3"), t("service4"), t("service5"), t("service6")].map((type) => (
            <Dropdown.Item key={type} onClick={() => setSelectedVideoType(type === "All" ? "" : type)}>
              {t(type.charAt(0).toUpperCase() + type.slice(1).toLowerCase())}
            </Dropdown.Item>
          ))}
        </Dropdown>

                <TextInput
                  type="text"
                  placeholder={t("searchType")}
                  className="flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Bouton de recherche */}
        <Button className="w-full md:w-auto border focus:outline-none focus:ring-0  active:scale-105 bg-rose-600" onClick={handleSearchClick}>
          {t("search2")}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;