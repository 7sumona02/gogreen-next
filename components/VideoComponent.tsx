// File: ../ui/VideoComponent.jsx
import React from 'react';

const VideoComponent = () => {
  return (
    <div className="max-w-[800px] mx-auto overflow-hidden h-[450px] shadow-xl shadow-[#23ce6b]/10">
      <iframe
        src="https://www.youtube.com/embed/5rg7vgniCZc?si=PEGhehjy946Sp9xW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full" // Make iframe responsive and rounded
      ></iframe>
    </div>
  );
};

export default VideoComponent;