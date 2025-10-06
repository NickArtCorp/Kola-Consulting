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
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Function to apply the search query
  const handleApplySearch = () => {
    setAppliedSearchQuery(searchQuery);
  };

  if (loading) return <Spinner />;

  return (
    <main role="main" className={`${isDropdownHovered ? 'backdrop-blur-sm' : ''} font-sans`}>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setAppliedSearchQuery={handleApplySearch} // Pass the function to apply search
      />

      {/* The SearchBar component you already have. Make sure it also uses `searchQuery` and `setSearchQuery` */}
      <SearchBar
        mode={viewMode}
        selectedVideoType={selectedVideoType}
        setSelectedVideoType={setSelectedVideoType}
        selectedImageType={selectedImageType}
        setSelectedImageType={setSelectedImageType}
        searchQuery={searchQuery} // Pass searchQuery to SearchBar
        setSearchQuery={setSearchQuery} // Pass setSearchQuery to SearchBar
        setAppliedSearchQuery={handleApplySearch} // Pass the function to apply search
      />

      {/* View Mode Toggle */}
      <div className="flex justify-center my-6">
        <div className="flex bg-gray-200 rounded-full p-1 shadow-md">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-700 ${
              viewMode === 'videos' ? 'bg-[#e32c66] text-white shadow' : 'text-gray-600'
            }`}
            onClick={() => {
              setViewMode('videos');
              setSelectedImageType(''); // Clear image type when switching to videos
              setAppliedSearchQuery(searchQuery); // Re-apply search in case view mode changes
            }}
          >
            {t("videos")}
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-700 ${
              viewMode === 'images' ? 'bg-[#e32c66] text-white shadow' : 'text-gray-600'
            }`}
            onClick={() => {
              setViewMode('images');
              setSelectedVideoType(''); // Clear video type when switching to images
              setAppliedSearchQuery(searchQuery); // Re-apply search in case view mode changes
            }}
          >
            {t("images")}
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
      <Footer />
    </main>
  );
};

export default Realisation;