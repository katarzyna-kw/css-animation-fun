import React from 'react';
import './App.css';
import Amelia from './components/Amelia'
import Karoline from './components/Karoline'
import Julia from './components/Julia'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.css';

SwiperCore.use([Navigation, Pagination]);

function App() {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img 
          src={`https://picsum.photos/id/${i+1}/500/300`} 
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }
  return (<div className="container">
      <Amelia />
      <Karoline />
      <Julia />
    <React.Fragment>
      <Swiper 
        id="main" 
        tag="section" 
        wrapperTag="ul" 
        navigation 
        pagination
        spaceBetween={0}
        slidesPerView={2}
      >
        {slides}</Swiper>
    </React.Fragment>
    </div>
  );
}

export default App;
