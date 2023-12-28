import { useState, useEffect } from 'react';
import './ProductImages.css';
import data from '../data';
import product1 from '../assets/images/image-product-1.jpg';

const ProductImages = () => {
  const [thumbImages, setThumbImages] = useState(data);
  const [selectedImage, setSelectedImage] = useState(product1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const currentIndex = thumbImages.findIndex(
      (img) => img.img === selectedImage
    );
    const nextIndex = (currentIndex + 1) % thumbImages.length;
    setSelectedImage(thumbImages[nextIndex].img);
  };

  const handlePrev = () => {
    const currentIndex = thumbImages.findIndex(
      (img) => img.img === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + thumbImages.length) % thumbImages.length;
    setSelectedImage(thumbImages[prevIndex].img);
  };

  return (
    <section className='images-container'>
      <div className='product-img'>
        <img src={selectedImage} alt='selected' className='img' />
        <button onClick={handlePrev} className='prev-btn prev-res'>
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='#1d1c20'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </button>
        <button onClick={handleNext} className='next-btn next-res'>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='#1d1c20'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='images'>
        {thumbImages.map((image) => {
          const { id, thumb, img } = image;
          return (
            <img
              key={id}
              src={thumb}
              alt={id}
              className='images-thumb'
              onClick={() => handleImageClick(img)}
            />
          );
        })}
      </div>
      {isModalOpen && (
        <div className='modal overlay'>
          <div className='modal-relative'>
            <button onClick={() => setIsModalOpen(false)} className='close-btn'>
              <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                  fill='#ffffff'
                  fillRule='evenodd'
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt='selected'
              className='selected-image'
            />
            <button onClick={handlePrev} className='prev-btn'>
              <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11 1 3 9l8 8'
                  stroke='#1d1c20'
                  strokeWidth='3'
                  fill='none'
                  fillRule='evenodd'
                />
              </svg>
            </button>
            <button onClick={handleNext} className='next-btn'>
              <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='m2 1 8 8-8 8'
                  stroke='#1d1c20'
                  strokeWidth='3'
                  fill='none'
                  fillRule='evenodd'
                />
              </svg>
            </button>
            <div className='images' style={{ paddingTop: '20px' }}>
              {thumbImages.map((image) => {
                const { id, thumb, img } = image;
                return (
                  <img
                    key={id}
                    src={thumb}
                    alt={id}
                    onClick={() => handleImageClick(img)} // Pass the full image instead of the thumbnail
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductImages;
