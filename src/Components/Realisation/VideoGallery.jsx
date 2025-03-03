import React from "react";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import video1 from "../../videos/lizard.mp4"; // Exemple de vidéo
import { useTranslation } from "react-i18next";

const VideoGallery = ({ selectedVideoType, searchQuery }) => {
    const { t } = useTranslation();


  const videos = [
    { id: 1, 
      title: "How To Create Engaging Social Content", 
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service1")
    },

    { id: 2, 
      title: "Mastering Social Media Marketing", 
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service2")
    },

    { id: 3, 
      title: "The Art of Storytelling in Videos",
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service3")
      
    },

    { id: 4,
      title: "Tips for Viral Social Media Content", 
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service3")
    },

    { id: 5, 
      title: "Advanced Video Editing Techniques", 
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service3")
    },

    { id: 6, 
      title: "Creating Content for Instagram Reels", 
      category: "How To, Social Content", 
      videoUrl: video1, 
      type: t("service4")
    },
  ];

  // Filtrage des vidéos en fonction du type et du texte recherché
  const filteredVideos = videos.filter((video) => {
    const matchesType = selectedVideoType ? video.type === selectedVideoType : true;
    const matchesQuery = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());
        video.type.charAt(0).toUpperCase() + selectedVideoType.slice(1).toLowerCase();
    return matchesType && matchesQuery;
  });

  return (
    
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto">

      {selectedVideoType ?  (

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {t(selectedVideoType.charAt(0).toUpperCase() + selectedVideoType.slice(1).toLowerCase())}
      </h2>
         ): (
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        All Videos
      </h2>
         ) }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-xl transition-shadow p-2 sm:p-4">
              <div className="w-full overflow-hidden rounded-t-lg relative">
                <video src={video.videoUrl} title={video.title} className="w-full h-32 sm:h-40 md:h-48 object-cover" controls />
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{video.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">{video.category}</p>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No videos found.</p>
        )}
      </div>
    </div>
  );
};

VideoGallery.propTypes = {
  selectedVideoType: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default VideoGallery;