// src/components/Packages/VideoModal.jsx
import React from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-6xl text-vBrightOrange z-50">&times;</button>
        
        {/* YouTube Video */}
        <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3fke2EvIY24?si=QhtGWeX5hYFw5KnV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
