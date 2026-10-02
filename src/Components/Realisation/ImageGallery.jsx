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
import { ArrowLeft, ZoomIn, X, ChevronRight, Image as ImageIcon } from "lucide-react";

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
      <div className="w-full">
        <button
          onClick={handleBackToProjects}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300/80 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 shadow-xs mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#e32c66]" />
          <span>{t("backToProjects") || "Retour aux réalisations"}</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/80 shadow-xs mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{selectedProject.category}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {selectedProject.title}
          </h2>
          {selectedProject.description && (
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {selectedProject.description}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              selectedProject.description1,
              selectedProject.description2,
              selectedProject.description3,
              selectedProject.description4,
              selectedProject.description5,
              selectedProject.description6,
            ]
              .filter(Boolean)
              .map((desc, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-600/60"
                >
                  ✓ {desc}
                </span>
              ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.isArray(selectedProject.imageUrl) ? (
            selectedProject.imageUrl.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-xs cursor-pointer"
                onClick={() => handleImageClick(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={`${selectedProject.title} - ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-xs cursor-pointer"
              onClick={() => handleImageClick(selectedProject.imageUrl)}
            >
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Lightbox */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6"
            onClick={closeZoomedImage}
          >
            <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={zoomedImage}
                alt="Agrandissement"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={closeZoomedImage}
                className="absolute top-3 right-3 sm:-top-12 sm:-right-12 text-white p-2.5 rounded-full bg-black/60 sm:bg-transparent hover:bg-white/20 transition-colors focus:outline-none"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          {selectedImageType ? selectedImageType : t("allImages") || "Projets & Galeries Photo"}
        </h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={Array.isArray(project.imageUrl) ? project.imageUrl[0] : project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-xs text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
                {Array.isArray(project.imageUrl) && project.imageUrl.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-xs text-white">
                    {project.imageUrl.length} photos
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#e32c66] dark:group-hover:text-[#f2638f] transition-colors line-clamp-2 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-1 mt-2">
                    {[project.description1, project.description2, project.description3]
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((desc, i) => (
                        <p key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                          • {desc}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#e32c66] dark:text-[#f2638f]">
                    Découvrir l'album
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 group-hover:bg-[#e32c66] group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/80 dark:border-gray-700/80 p-8">
            <p className="text-gray-500 dark:text-gray-400 text-base">{t("no_I") || "Aucun projet photo trouvé."}</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
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
