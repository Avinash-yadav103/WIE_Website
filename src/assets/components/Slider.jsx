import React, { useState, useEffect } from 'react';
import './component.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    let i;

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    }
  };

  return (
    <div>
      <div className="slideshow-container">
        {/* Slide 1 */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img1.jpg" style={{ width: '100%' }} alt="Slide 1" />
          <div className="text">Caption Text</div>
        </div>

        {/* Slide 2 */}
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img2.jpg" style={{ width: '100%' }} alt="Slide 2" />
          <div className="text">Caption Two</div>
        </div>

        {/* Slide 3 */}
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img3.jpg" style={{ width: '100%' }} alt="Slide 3" />
          <div className="text">Caption Three</div>
        </div>

        {/* Next/Prev buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      {/* Dots for slide selection */}
      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slider;
