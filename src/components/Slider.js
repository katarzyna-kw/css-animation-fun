// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Slider.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default () => {
    return (
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <img
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/0.png?raw=true"
                alt="election map website screencapture" 
            />
            <h5>Election map coded with Javascript given html and css // Skillcrush  project</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/1.png?raw=true"
                alt="quote generator screencapture"
            />
            <h5>Responsive quote generator coded with vanilla Javascript</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/2a.png?raw=true" 
                alt="cat clock screencapture"
            />
            <h5>Clock coded with Javascript and styled given html and template css code // Skillcrush project</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/3.png?raw=true" 
                alt="survey form screencapture"
            />
            <h5>Responsive mock survey form coded with HTML and CSS // freecodecamp.com project</h5>
        </SwiperSlide>
      </Swiper>
    );
  };  