import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Dropdown, TextInput, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const SearchBar = ({
  mode, // 'videos' or 'images'
  searchQuery,
  setSearchQuery,
  selectedVideoType,
  setSelectedVideoType,
  selectedImageType,
  setSelectedImageType,
  setAppliedSearchQuery,
}) => {
  const typingRef = useRef(null);
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

    return () => typed.destroy();
  }, []);

  const handleSearchClick = () => {
    // Cette fonction est appelée par le bouton de recherche
    setAppliedSearchQuery(searchQuery);
  };
  
  // Types for dropdown
  const videoTypes = ["All", t("service1"), t("service2"), t("service3"), t("service4"), t("service5"), t("service6"), t("service7")];
  const imageTypes = [
    "All",
    t("service1"),
    t("service2"),
    t("service3"),
    t("service4"),
    t("service5"),
    t("service6"),
    t("service7")
  ];

  // Determine current type and setter based on mode
  const isVideo = mode === "videos";
  const currentType = isVideo ? selectedVideoType : selectedImageType;
  const setCurrentType = isVideo ? setSelectedVideoType : setSelectedImageType;
  const typeList = isVideo ? videoTypes : imageTypes;

  return (
    <div className="p-8 rounded-lg w-[900px] mx-auto mt-32 mb-2">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        <span ref={typingRef}></span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 p-6 shadow-lg bg-gray-50 rounded-lg">
        {/* Dynamic Dropdown */}
        <Dropdown
          label={currentType ? currentType : t("choose")}
          inline
          dismissOnClick
        >
          {typeList.map((type) => (
            <Dropdown.Item
              key={type}
              onClick={() => {
                const newType = type === "All" ? "" : type;
                // CORRECTED LOGIC:
                // Set the new filter type and immediately apply the search with the current query.
                setCurrentType(newType);
                setAppliedSearchQuery(searchQuery);
              }}
            >
              {type}
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

        <Button
          className="w-full md:w-auto border focus:outline-none focus:ring-0 active:scale-105 bg-[#e32c66]"
          onClick={handleSearchClick}
        >
          {t("search2")}
        </Button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  mode: PropTypes.oneOf(["videos", "images"]).isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  selectedVideoType: PropTypes.string,
  setSelectedVideoType: PropTypes.func,
  selectedImageType: PropTypes.string,
  setSelectedImageType: PropTypes.func,
  setAppliedSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
