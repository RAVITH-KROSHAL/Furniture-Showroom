import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
// import CorporateInquiry from "./pages/CorporateInquiry";

// // Example categories
// import Beds from "./pages/categories/Beds";
// import BedroomSuites from "./pages/categories/BedroomSuites";
// import BedSheetsPillows from "./pages/categories/BedSheetsPillows";
// // ... import other categories

function App() {
  return (
    <Router>
      {/* Wrap header + navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
       <Header/>
       <Navbar/>
        </div>
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/corporate-inquiry" element={<CorporateInquiry />} />

        {/* Category Pages */}
        {/* <Route path="/product-category/beds" element={<Beds />} />
        <Route path="/product-category/bedroom-suites" element={<BedroomSuites />} />
        <Route path="/product-category/bed-sheets-pillows" element={<BedSheetsPillows />} /> */} 
        {/* Add other categories here */}
      </Routes>
 
      <Footer/>
    </Router>
  );
}

export default App;
