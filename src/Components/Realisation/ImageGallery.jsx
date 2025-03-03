import React from "react";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import image1 from  "../../Images/Hero_Images/photo_1.jpg"; // Example images

const ImageGallery = ({ selectedImageType, searchQuery }) => {
  const images = [
    { id: 1, title: "Project Design Mockup", category: "UI/UX, Design", imageUrl: image1, type: "Administration et secrétariat de projets" },
    { id: 2, title: "Event Branding", category: "Marketing, Events", imageUrl: image1, type: "Représentation" },
    { id: 3, title: "Outdoor Advertising Campaign", category: "Marketing, Ads", imageUrl: image1, type: "Actions de terrain" },
    { id: 4, title: "Sponsorship Proposal", category: "Funding, Documentation", imageUrl: image1, type: "Audit de demandes de financement ou de sponsoring" },
  ];

  // Filter images based on project type and search query
  const filteredImages = images.filter((image) => {
    const matchesType = selectedImageType ? image.type === selectedImageType : true;
    const matchesQuery = 
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      {selectedImageType ?  (

       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
       {selectedImageType}
      </h2>
         ): (
     <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          All Images
      </h2>
       ) }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <Card key={image.id} className="hover:shadow-xl transition-shadow p-2 sm:p-4">
              <div className="w-full overflow-hidden rounded-t-lg relative">
                <img src={image.imageUrl} alt={image.title} className="w-full h-32 sm:h-40 md:h-48 object-cover" />
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{image.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">{image.category}</p>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No images found.</p>
        )}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  selectedImageType: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default ImageGallery;
