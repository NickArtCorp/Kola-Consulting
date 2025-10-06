import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import video1 from "../../videos/Animations.mp4";
import video2 from "../../videos/Discours Chef.mp4";
import video3 from "../../videos/Discours.mp4";
import video4 from "../../videos/End.mp4";
import video5 from "../../videos/Hymne.mp4";
import video6 from "../../videos/Intro.mp4";
import video7 from "../../videos/Prete.mp4";
import video8 from "../../videos/Retraite.mp4";
import video9 from "../../videos/Rituels.mp4";

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
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedVideoType
            ? t(
                selectedVideoType.charAt(0).toUpperCase() +
                  selectedVideoType.slice(1).toLowerCase()
              )
            : t("allVideos")}
        </h2>
        <p className="text-gray-500 text-lg">
          {t("no_V") || "No suggested video"}
        </p>
      </div>
    );
  }

  const suggestedVideos = filteredVideos.filter(
    (video) => video.id !== selectedVideo?.id
  );

  return (
    <div className="p-4 md:p-8 max-w-8xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {selectedVideoType
          ? t(
              selectedVideoType.charAt(0).toUpperCase() +
                selectedVideoType.slice(1).toLowerCase()
            )
          : t("allVideos")}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main video */}
        <div className="w-full md:w-2/3">
          <div className="rounded-lg overflow-hidden shadow-md">
            <video
              src={selectedVideo?.videoUrl}
              controls
              className="w-[40em] h-[20em]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedVideo?.title}
              </h3>
              <p className="text-sm text-gray-500">{selectedVideo?.category}</p>
              {selectedVideo?.description && (
                <p className="text-base text-gray-700 mt-2">
                  {selectedVideo.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Suggested Videos */}
        <aside className="w-full md:w-1/3 space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            {t("suggest")}
          </h4>
          {suggestedVideos.map((video) => (
            <div
              key={video.id}
              className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
              onClick={() => setSelectedVideo(video)}
            >
              <video
                src={video.videoUrl}
                className="w-24 h-16 object-cover rounded-md"
                muted
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-gray-800">
                  {video.title}
                </p>
                <p className="text-xs text-gray-500">{video.category}</p>
              </div>
            </div>
          ))}
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
