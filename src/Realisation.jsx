import { useState, useEffect } from 'react';
import Navbar from './Components/Home/Navbar'; // Adjust path
import SearchBar from './Components/Home/SearchBar'; // Adjust path
import VideoGallery from './Components/Realisation/VideoGallery'; // Adjust path
import ImageGallery from './Components/Realisation/ImageGallery'; // Adjust path
import Spinner from './Spinner'; // Adjust path
import { useDropdown } from './DropdownContext'; // Adjust path
import { useTranslation } from 'react-i18next';
import Footer from './Components/Home/Footer4'; // Adjust path

const Realisation = () => {
  const [viewMode, setViewMode] = useState('videos');
  const [loading, setLoading] = useState(true);
  const [selectedImageType, setSelectedImageType] = useState('');
  const [selectedVideoType, setSelectedVideoType] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // This holds the current input value
  const [appliedSearchQuery, setAppliedSearchQuery] = useState(''); // This holds the query used for filtering galleries
  const { isDropdownHovered } = useDropdown();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  // Function to apply the search query
  const handleApplySearch = () => {
    setAppliedSearchQuery(searchQuery);
  };

  if (loading) return <Spinner />;

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors ${isDropdownHovered ? 'backdrop-blur-sm' : ''}`}>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setAppliedSearchQuery={handleApplySearch}
      />

      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SearchBar
          mode={viewMode}
          selectedVideoType={selectedVideoType}
          setSelectedVideoType={setSelectedVideoType}
          selectedImageType={selectedImageType}
          setSelectedImageType={setSelectedImageType}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setAppliedSearchQuery={handleApplySearch}
        />

        {/* View Mode Toggle */}
        <div className="flex justify-center my-8">
          <div className="inline-flex bg-gray-200/80 dark:bg-gray-800 rounded-full p-1 shadow-xs border border-gray-300/60 dark:border-gray-700/60">
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                viewMode === 'videos' ? 'bg-[#e32c66] text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => {
                setViewMode('videos');
                setSelectedImageType('');
                setAppliedSearchQuery(searchQuery);
              }}
            >
              {t("videos") || "Vidéos"}
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                viewMode === 'images' ? 'bg-[#e32c66] text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => {
                setViewMode('images');
                setSelectedVideoType('');
                setAppliedSearchQuery(searchQuery);
              }}
            >
              {t("images") || "Photos & Galeries"}
            </button>
          </div>
        </div>

        {/* Gallery */}
        {viewMode === 'videos' ? (
          <section>
            <VideoGallery selectedVideoType={selectedVideoType} searchQuery={appliedSearchQuery} />
          </section>
        ) : (
          <section>
            <ImageGallery selectedImageType={selectedImageType} searchQuery={appliedSearchQuery} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Realisation;