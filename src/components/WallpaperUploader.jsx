import React from "react";

const WallpaperUploader = ({ setBackgroundImage }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label
      htmlFor="file-upload"
      className="fixed top-4 left-4 bg-gray-700 p-2 rounded-full cursor-pointer"
      title="Change Background"
    >
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="w-4 h-4 bg-blue-500"></div>
    </label>
  );
};

export default WallpaperUploader;
