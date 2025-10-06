import PropTypes from "prop-types";
import { Card, Pagination, Button } from "flowbite-react";
import { useState, useEffect } from "react";
// Import all your images
import image1 from "../../Images/Hero_Images/photo_1.jpg";
import image2 from "../../Images/Hero_Images/photo_2.jpg";
import image3 from "../../Images/Musée_National/photo_1.jpg";
import image4 from "../../Images/Dika Mpondo/photo_25.jpg";
import image5 from "../../Images/Dika Mpondo/photo_26.jpg";
import image6 from "../../Images/Dika Mpondo/photo_13.jpg";
import image7 from "../../Images/Dika Mpondo/photo_15.jpg"; 
import image8 from "../../Images/Dika Mpondo/photo_18.jpg";
import image30 from "../../Images/Chantiers_Musicaux/photo_a.jpg";
import image31 from "../../Images/Chantiers_Musicaux/photo_b.jpg";
import image32 from "../../Images/Chantiers_Musicaux/photo_c.jpg";
import image33 from "../../Images/Chantiers_Musicaux/photo_d.jpg";
import image34 from "../../Images/Chantiers_Musicaux/photo_e.jpg";
import image35 from "../../Images/Chantiers_Musicaux/photo_f.jpg";
import image65 from "../../Images/Musée_National/photo_1.jpg";
import image66 from "../../Images/Musée_National/photo_2.jpg";
import image67 from "../../Images/Musée_National/photo_3.jpg";
import image70 from "../../Images/Musée Maritime/photo_1.jpg";
import image71 from "../../Images/Musée Maritime/photo_2.jpg";
import image72 from "../../Images/Musée Maritime/photo_3.jpg";
import image75 from "../../Images/PROJET VITA/photo_1.jpg";
import image76 from "../../Images/PROJET VITA/photo_2.jpg";
import image77 from "../../Images/PROJET VITA/photo_3.jpg";
import image78 from "../../Images/PROJET VITA/photo_4.jpg";
import image79 from "../../Images/CIS- Lobying/photo_1.jpg";
import image80 from "../../Images/CIS- Lobying/photo_2.jpg";
import image81 from "../../Images/Le_Kolatier/photo_17.jpg";
import image82 from "../../Images/Le_Kolatier/photo_18.jpg"
import image83 from "../../Images/CAM/photo_1.jpg";
import image84 from "../../Images/CAM/photo_2.jpg";
import image85 from "../../Images/CAM/photo_3.jpg";
import image86 from "../../Images/CAM/photo_4.jpg";
import image87 from "../../Images/CAM/photo_5.jpg";
import image88 from "../../Images/CAM/photo_6.jpg";
import { useTranslation } from "react-i18next";

const ImageGallery = ({ selectedImageType, searchQuery }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const projectsPerPage = 3;

  // Cette fonction réinitialise la vue détaillée du projet à chaque fois que la requête de recherche ou le type d'image change.
  useEffect(() => {
    setSelectedProject(null);
    setCurrentPage(1);
  }, [searchQuery, selectedImageType]);

  const images = [
    {
      id: 1,
      title: t('chant'),
      category:t('service1_small'),
      imageUrl: [image30, image31, image32, image33, image34, image35],
      type: t("service1"),
      description1: t('putting'),
      description2: t('proposition'),
      description3: t('sec_act'),
      description4: t('report')
    },

    {
      id: 2,
      title: t('vita'),
      category: t('service1_small'),
      imageUrl: [image75, image76, image77, image78],
      type: t("service1"),
      description1: t('contribution'),
      description2: t('sec'),
      description3:t('report_yde')
    
    },
    {
      id: 3,
      title: t('king'),
      category: t('service1_small '),
      imageUrl: [image4, image5, image6, image7, image8],
      type: t("service1, service5"), 
      description1: t('writing'),
      description2:t('conception')
    },

    {
      id: 4,
      title: t('muna'),
      category: t('service5_small'),
      imageUrl: [image65, image66, image67],
      type: t("service5"),
      description1: t('scen'),
      description2:t('org_night')
    },
    {
      id: 5,
      title: t('muma'),
      category: t('service5_small'),
      imageUrl: [image70, image71, image72],
      type: t("service5"),
      description1: t('scen'),
      description2: t('sup')
    },

    {
      id: 6,
      title: t('kola'),
      category: t('service5_small'),
      imageUrl: [image81, image82],
      type: t("service1"),
      description1:-t('planning'),
      description2:t('organ'),
      description3:t('choice'),
      description4:t('recrut'),
    
    },

    {
      id: 7,
      title: t('cis'),
      category: t('service7_small'),
      imageUrl: [image79, image80],
      type: t("service7"),
      description1: t('acc'),
      description2: t('relation')

    },

    {
      id: 8,
      title: t('cam'),
      category: t('service3_small'),
      imageUrl: [image83, image82, image84, image85, image86, image87],
      type: t("service3"),
      description1: t('part'),
      description2: t('meet'),
      description3: t('com'),
      description4: t('dil'),
      description5: t('follow'),
      description6: t('priv')
    }

  ];

  const filteredProjects = images.filter((project) => {
    const matchesType = selectedImageType
      ? project.type.toLowerCase().trim() === selectedImageType.toLowerCase().trim()
      : true;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesQuery;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageClick = (imgSrc) => {
    setZoomedImage(imgSrc);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  if (selectedProject) {
    return (
      <div className="p-4 md:p-8 rounded-lg shadow-lg max-w-full mx-auto">
        <Button onClick={handleBackToProjects} className="mb-6 bg-gray-200 text-gray-700 hover:bg-gray-300">
          &larr; Retour aux Projets
        </Button>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
        <p className="text-lg text-gray-600 mb-4">{selectedProject.category}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-8">{selectedProject.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(selectedProject.imageUrl) ? (
            selectedProject.imageUrl.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full h-auto overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(imgSrc)}
              >
                <img src={imgSrc} alt={`${selectedProject.title} - ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))
          ) : (
            <div
              className="w-full h-auto overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(selectedProject.imageUrl)}
            >
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeZoomedImage}
          >
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-[90vh] object-contain" />
              <button
                onClick={closeZoomedImage}
                className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
                aria-label="Fermer"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 rounded-lg shadow-lg max-w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {selectedImageType ? selectedImageType : t("allImages")}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-xl transition-shadow p-4 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    src={Array.isArray(project.imageUrl) ? project.imageUrl[0] : project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#e32c66] mb-3">
                    {project.category}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                    {project.description1}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                    {project.description2}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                    {project.description3}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                    {project.description4}
                  </p>

                  <p className="text-blue-600 hover:underline mt-2">Voir plus &rarr;</p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">{t("no_I")}</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex overflow-x-auto sm:justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  selectedImageType: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default ImageGallery;
