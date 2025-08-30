import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import GalleryPreview from "../components/home/GalleryPreview";

const Home = () => {
  return (
    <div >
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Gallery Preview */}
      <GalleryPreview />
    </div>
  );
};

export default Home;
