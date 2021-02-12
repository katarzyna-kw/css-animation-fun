import React from 'react';
import './App.css';
import Amelia from './components/Amelia'
import Karoline from './components/Karoline'
import Julia from './components/Julia'
import Slider from './components/Slider'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import './App.css';

// SwiperCore.use([Navigation, Pagination]);

// function App() {
//   const slides = [];

//   for (let i = 0; i < 5; i += 1) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <img 
//           src={`https://picsum.photos/id/${i+1}/500/300`} 
//           style={{ listStyle: 'none' }}
//           alt={`Slide ${i}`} />
//       </SwiperSlide>
//     );
//   }

function App() {
  return (
  <div className="container">
    <Slider />
    <Amelia />
    <Karoline />
    <Julia />

{/* //     <React.Fragment>
//       <Swiper  */}
{/* //         id="main" 
//         tag="section" 
//         wrapperTag="ul" 
//         navigation 
//         pagination
//         spaceBetween={0}
//         slidesPerView={1}
//         breakpoints={{ */}
{/* //           //when window width is >=640px
//           640: { */}
{/* //             width: 640,
//             slidesPerView: 2,
//           },
//           //when window width is >=768px
//           768: { */}
{/* //             width: 768,
//             slidesPerView: 2,
//           },
//         }}
//       >
//         {slides}</Swiper> */}
        
{/* //     </React.Fragment> */}

    </div>
  );
}

export default App;
