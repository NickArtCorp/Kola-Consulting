import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Components/Home/Navbar';
import SearchBar from './Components/Home/SearchBar';
import VideoGallery from './Components/Realisation/VideoGallery';
import ImageGallery from './Components/Realisation/ImageGallery';
import Spinner from './Spinner';
import { useDropdown } from './DropdownContext';
import { useTranslation } from 'react-i18next';

const Realisation = () => {
  const [viewMode, setViewMode] = useState('videos');  
  const [loading, setLoading] = useState(true);
  const [selectedVideoType, setSelectedVideoType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState(''); 
  const { isDropdownHovered } = useDropdown();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main role="main font-sans" className={ `${isDropdownHovered ? 'backdrop-blur-sm' : ''} font-sans`}>
      <Navbar />
      
      <SearchBar
        selectedVideoType={selectedVideoType}
        setSelectedVideoType={setSelectedVideoType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setAppliedSearchQuery={setAppliedSearchQuery}
      /> 

      {/* Custom Toggle Switch */}
      <div className="flex justify-center my-6">
        <div className="flex bg-gray-200 rounded-full p-1 shadow-md">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-700 ${
              viewMode === 'videos' ? 'bg-rose-600 text-white shadow' : 'text-gray-600'
            }`}
            onClick={() => setViewMode('videos')}
          >
            {t("videos")}
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-700 ${
              viewMode === 'images' ? 'bg-rose-600 text-white shadow' : 'text-gray-600 '
            }`}
            onClick={() => setViewMode('images')}
          >
           {t("images")}
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {viewMode === 'videos' ? (
        <section className="">
          <VideoGallery selectedVideoType={selectedVideoType} searchQuery={appliedSearchQuery} />
        </section>
      ) : (
        <section className="">
          <ImageGallery selectedImageType={selectedVideoType} searchQuery={appliedSearchQuery} />
        </section>
      )}
    </main>
  );
};

SearchBar.propTypes = {
  selectedVideoType: PropTypes.string,
  onVideoTypeChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

VideoGallery.propTypes = {
  selectedVideoType: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default Realisation;
