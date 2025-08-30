// // src/components/FeaturedProducts.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Luxury Bed",
//     image: "/fp0.jpg",
//     price: "Rs. 120,000",
//   },
//   {
//     id: 2,
//     name: "Modern Sofa",
//     image: "fp1.jpg",
//     price: "Rs. 85,000",
//   },
//   {
//     id: 3,
//     name: "Office Chair",
//     image: "/fp2.jpg",
//     price: "Rs. 45,000",
//   },
// ];

// const FeaturedProducts = () => {
//   return (
//     <section className="py-12 px-6 md:px-12">
//       <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
//         Featured Products
//       </h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-green-700 font-bold">{product.price}</p>
//               <Link
//                 to={`/products/${product.id}`}
//                 className="block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg text-center hover:bg-green-800"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;


// src/components/FeaturedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; // using lucide-react for stars

const products = [
  {
    id: 1,
    name: "Luxury Bed",
    image: "/featuredproduct/fp0.jpg",
    price: "Rs. 120,000",
    rating: 5,
    badge: "New",
  },
  {
    id: 2,
    name: "Modern Sofa",
    image: "/featuredproduct/fp1.jpg",
    price: "Rs. 85,000",
    rating: 4,
    badge: "Hot",
  },
  {
    id: 3,
    name: "Office Chair",
    image: "/featuredproduct/fp2.jpg",
    price: "Rs. 45,000",
    rating: 4,
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-2xl transition"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                <Link
                  to={`/products/${product.id}`}
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition"
                >
                  View
                </Link>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-700 font-bold text-xl mb-2">
                {product.price}
              </p>

              {/* Ratings */}
              <div className="flex justify-center gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < product.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
