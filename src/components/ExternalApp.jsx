import React from "react";

const ExternalApp = ({ src }) => {
  return (
    <div className="flex fixed overflow-hidden justify-center items-center h-full w-full z-0">
      <iframe
        src={src}
        title="External App"
        className="w-full h-full border-none overflow-y-hidden"
        // scrolling="no"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ExternalApp;
