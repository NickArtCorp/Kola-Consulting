import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import video4 from "../../videos/End.mp4";
import video6 from "../../videos/Intro.mp4";

const video1 = video6;
const video2 = video4;
const video3 = video6;
const video5 = video4;
const video7 = video6;
const video8 = video4;
const video9 = video6;

const VideoGallery = ({ selectedVideoType, searchQuery }) => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: " Une production exécutive de Kola Consulting",
      category: t("service1_small"),
      videoUrl: video6,
      type: t("service1"),
      description: "Hommage au King Dika Mponndo ",
    },
    {
      id: 2,
      title: "Retraite aux flambeaux.Une production éxécutive de Kola Cconsulting",
      category:t("service1_small"),
      videoUrl: video7,
      type: t("service1"),
      description: t("king") 
    },
    {
      id: 3,
      title: "Rituel d'hommage au mausolée King Akwa",
      category: t("service1_small"),
      videoUrl: video9,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo  ",
    },
    {
      id: 4,
      title: " Une élite de BONAMBELA s’exprime",
      category: t("service1_small"),
      videoUrl: video3,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo",
    },
    {
      id: 5,
      title: "Message de communion par sa Majesté Din Dika Akwa III",
      category: t("service1_small"),
      videoUrl: video2,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo",
    },
    {
      id: 6,
      title: "Rituel d'offrandes au mausolée King Akwa",
      category: t("service1_small"),
      videoUrl: video7,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo ",
    },
    {
      id: 7,
      title: "Animations au mausolée King Akwa",
      category: t("service1_small"),
      videoUrl: video1,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo ",
    },
    {
      id: 8,
      title:" Exécution de l'hymne des Bonambela.",
      category: t("service1_small"),
      videoUrl: video5,
      type: t("service1"),
      description: "Hommage au King Dika Mpondo ",
    },
   
  ];

  // Filtrage par type + recherche
  const filteredVideos = videos.filter((video) => {
    const matchesType = selectedVideoType ? video.type === selectedVideoType : true;
    const matchesQuery =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());
    const hasVideoUrl = typeof video.videoUrl === "string";
    return matchesType && matchesQuery && hasVideoUrl;
  });

  // Sélection automatique de la 1ère vidéo si rien n’est sélectionné
  useEffect(() => {
    if (filteredVideos.length > 0) {
      setSelectedVideo(filteredVideos[0]);
    } else {
      setSelectedVideo(null);
    }
  }, [searchQuery, selectedVideoType]);

  if (filteredVideos.length === 0) {
    return (
      <div className="p-6 md:p-8 max-w-7xl mx-auto rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {selectedVideoType
            ? t(
                selectedVideoType.charAt(0).toUpperCase() +
                  selectedVideoType.slice(1).toLowerCase()
              )
            : t("allVideos") || "Toutes les vidéos"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          {t("no_V") || "Aucune vidéo trouvée pour ces critères."}
        </p>
      </div>
    );
  }

  const suggestedVideos = filteredVideos.filter(
    (video) => video.id !== selectedVideo?.id
  );

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          {selectedVideoType
            ? t(
                selectedVideoType.charAt(0).toUpperCase() +
                  selectedVideoType.slice(1).toLowerCase()
              )
            : t("allVideos") || "Vidéos & Productions Audiovisuelles"}
        </h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {filteredVideos.length} vidéo{filteredVideos.length > 1 ? 's' : ''} disponible{filteredVideos.length > 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main video player */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-full aspect-video bg-black overflow-hidden relative">
              <video
                key={selectedVideo?.id}
                src={selectedVideo?.videoUrl}
                controls
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 sm:p-6">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-2">
                {selectedVideo?.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {selectedVideo?.title}
              </h3>
              {selectedVideo?.description && (
                <p className="text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {selectedVideo.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Suggested Videos list */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-xs">
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
              <span>{t("suggest") || "Autres vidéos"}</span>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                {suggestedVideos.length} suggestion{suggestedVideos.length > 1 ? 's' : ''}
              </span>
            </h4>
            
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
              {suggestedVideos.map((video) => (
                <div
                  key={video.id}
                  className="group flex gap-3 cursor-pointer p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                  onClick={() => {
                    setSelectedVideo(video);
                    window.scrollTo({ top: 150, behavior: 'smooth' });
                  }}
                >
                  <div className="w-24 h-16 sm:w-28 sm:h-18 flex-shrink-0 relative rounded-lg overflow-hidden bg-black">
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover pointer-events-none"
                      muted
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/80 dark:bg-black/80 flex items-center justify-center text-[#e32c66]">
                        <span className="text-xs font-black">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="text-xs font-bold text-[#e32c66] dark:text-[#f2638f] truncate">
                      {video.category}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mt-0.5 group-hover:text-[#e32c66] dark:group-hover:text-[#f2638f] transition-colors">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

VideoGallery.propTypes = {
  selectedVideoType: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default VideoGallery;
