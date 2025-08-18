// // src/components/GalleryPreview.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const galleryItems = [
//   { id: 1, image: "/gallery/gp0.jpg" },
//   { id: 2, image: "/gallery/gp1.jpg" },
//   { id: 3, image: "/gallery/gp2.jpg" },
//   { id: 4, image: "/gallery/gp3.jpg" },
//   { id: 5, image: "/gallery/gp4.jpg" },
//   { id: 6, image: "/gallery/gp5.jpg" },
//   { id: 7, image: "/gallery/gp6.jpg" },
//   { id: 8, image: "/gallery/gp7.jpg" },
//   { id: 9, image: "/gallery/gp8.jpg" },
//   { id: 10, image: "/gallery/gp8.jpg" },
//   { id: 11, image: "/gallery/gp10.jpg" },
// ];

// const GalleryPreview = () => {
//   return (
//     <section className="py-12 px-6 md:px-12 bg-gray-50">
//       <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
//         Gallery
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {galleryItems.map((item) => (
//           <img
//             key={item.id}
//             src={item.image}
//             alt="Gallery"
//             className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition"
//           />
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <Link
//           to="/gallery"
//           className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800"
//         >
//           View Full Gallery
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default GalleryPreview;


// src/components/GalleryPreview.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  "/gallery/gp0.jpg",
  "/gallery/gp1.jpg",
  "/gallery/gp2.jpg",
  "/gallery/gp3.jpg",
  "/gallery/gp4.jpg",
  "/gallery/gp5.jpg",
  "/gallery/gp6.jpg",
  "/gallery/gp7.jpg",
  "/gallery/gp8.jpg",
  "/gallery/gp9.jpg",
  "/gallery/gp10.jpg",
  
];

export default function GalleryPreview() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery Showcase</h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="rounded-2xl"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
