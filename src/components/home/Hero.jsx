// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const slidesData = [
//   {
//     imgSrc: "/hero/bg0.jpg",
//     title: "Luxury Living Room Collection",
//     description:
//       "Elevate your home with modern and comfortable furniture designs.",
//     buttonText: "Shop Now",
//     buttonLink: "/shop/living-room",
//   },
//   {
//     imgSrc: "/hero/bg1.jpg",
//     title: "Elegant Bedroom Sets",
//     description:
//       "Discover our cozy and stylish bedroom furniture that fits your lifestyle.",
//     buttonText: "Explore",
//     buttonLink: "/shop/bedroom",
//   },
//   {
//     imgSrc: "/hero/bg2.jpg",
//     title: "Modern Dining Spaces",
//     description:
//       "Upgrade your dining experience with our designer tables and chairs.",
//     buttonText: "Shop Dining",
//     buttonLink: "/shop/dining",
//   },
//   {
//     imgSrc: "/hero/bg3.jpg",
//     title: "Outdoor Furniture Collection",
//     description:
//       "Bring style and comfort to your garden and patio areas.",
//     buttonText: "Explore Outdoor",
//     buttonLink: "/shop/outdoor",
//   },
//   {
//     imgSrc: "/hero/bg4.jpg",
//     title: "Office Furniture Solutions",
//     description:
//       "Functional and stylish office setups for productivity and comfort.",
//     buttonText: "Shop Office",
//     buttonLink: "/shop/office",
//   },
//   {
//     imgSrc: "/hero/bg5.jpg",
//     title: "Decor & Accessories",
//     description:
//       "Complete your home with elegant decor and matching accessories.",
//     buttonText: "Shop Decor",
//     buttonLink: "/shop/decor",
//   },
// ];

// const Hero = () => {
//   return (
//     <section className="relative">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         loop={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="h-[80vh]"
//       >
//         {slidesData.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img
//                 src={slide.imgSrc}
//                 alt={slide.title}
//                 className="w-full h-full object-cover brightness-75"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
//                   {slide.title}
//                 </h2>
//                 <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fadeInUp delay-200">
//                   {slide.description}
//                 </p>
//                 <a
//                   href={slide.buttonLink}
//                   className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all animate-fadeInUp delay-400"
//                 >
//                   {slide.buttonText}
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;



import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

const slidesData = [
  { imgSrc: "/hero/bg0.jpg", title: "Luxury Living Room Collection", description: "Elevate your home with modern and comfortable furniture designs.", buttonText: "Shop Now", buttonLink: "/shop/living-room" },
  { imgSrc: "/hero/bg1.jpg", title: "Elegant Bedroom Sets", description: "Discover our cozy and stylish bedroom furniture that fits your lifestyle.", buttonText: "Explore", buttonLink: "/shop/bedroom" },
  { imgSrc: "/hero/bg2.jpg", title: "Modern Dining Spaces", description: "Upgrade your dining experience with our designer tables and chairs.", buttonText: "Shop Dining", buttonLink: "/shop/dining" },
  { imgSrc: "/hero/bg3.jpg", title: "Outdoor Furniture Collection", description: "Bring style and comfort to your garden and patio areas.", buttonText: "Explore Outdoor", buttonLink: "/shop/outdoor" },
  { imgSrc: "/hero/bg4.jpg", title: "Office Furniture Solutions", description: "Functional and stylish office setups for productivity and comfort.", buttonText: "Shop Office", buttonLink: "/shop/office" },
  { imgSrc: "/hero/bg5.jpg", title: "Decor & Accessories", description: "Complete your home with elegant decor and matching accessories.", buttonText: "Shop Decor", buttonLink: "/shop/decor" },
];

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="relative">
      {/* Main Hero Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Thumbs, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-[80vh]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img src={slide.imgSrc} alt={slide.title} className="w-full h-full object-cover brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">{slide.title}</h2>
                <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fadeInUp delay-200">{slide.description}</p>
                <a href={slide.buttonLink} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-all animate-fadeInUp delay-400">{slide.buttonText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress
        className="mt-4 max-w-6xl mx-auto px-4"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img src={slide.imgSrc} alt={`thumb-${index}`} className="w-full h-20 object-cover rounded-md border-2 border-transparent hover:border-orange-500 transition-all" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
