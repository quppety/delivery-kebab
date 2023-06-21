const React = require('react');
const { useState, useEffect } = require('react');
const Image = require('./Image');

module.exports = function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      );
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      <h1>{images.length}</h1>
      {/* Render the images */}
      {images.map((image) => (
        <Image key={image.id} {...image} />
      ))}
    </>
  );
};
