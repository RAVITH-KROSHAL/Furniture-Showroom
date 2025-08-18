import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile
  const location = useLocation();

  const navLinks = [
    {
      name: "PRODUCTS",
      dropdown: [
        {
          title: "LIVING ROOM",
          sub: [
            "Sofa Sets",
            "Corner + Chaise Sofa",
            "Recliner Sofa",
            "Single Seaters",
            "Ottoman",
            "Sofa Beds",
            "Wooden Sofa",
            "Coffee Tables & Side Tables",
            "TV Stands & Wall Units",
            "Display Cabinets & Sideboards",
            "Wall Shelves & Display Stands",
            "Rugs",
          ],
        },
      ],
    },
    {
      name: "LIVING ROOM",
      dropdown: [
        {
          title: "Seating",
          sub: [
            "Sofa Sets",
            "Corner + Chaise Sofa",
            "Recliner Sofa",
            "Single Seaters",
            "Ottoman",
            "Sofa Beds",
            "Wooden Sofa",
          ],
        },
        {
          title: "Coffee Tables, TV Stands & Rugs",
          sub: [
            "Coffee Tables & Side Tables",
            "TV Stands & Wall Units",
            "Display Cabinets & Sideboards",
            "Wall Shelves & Display Stands",
            "Rugs",
          ],
        },
      ],
    },
    {
      name: "BEDROOM",
      dropdown: [
        {
          title: "Bedroom Furniture",
          sub: [
            "Bedroom Suites",
            "Beds",
            "Bedside Cupboards",
            "Wardrobes",
            "Modular Wardrobe",
            "Dressing Tables",
            "Clothes Racks",
            "Shoe Racks & Storage",
            "Iron Tables",
          ],
        },
        {
          title: "Mattress, Pillows & Bedsheets",
          sub: [
            "Spring Mattress",
            "Foam Mattress",
            "Bed Sheets & Pillows",
            "Mattress Protector",
          ],
        },
      ],
    },
    {
      name: "DINING",
      dropdown: [
        {
          title: "Wooden Finish",
          sub: [
            "Wooden Dining Suites",
            "Wooden Dining Chairs",
            "Pantry Cupboards",
            "Cabinets & Console Table",
          ],
        },
        {
          title: "Metal Finish",
          sub: ["Metal Dining Suites", "Metal Dining Chairs"],
        },
      ],
    },
    {
      name: "PLASTIC PRODUCT",
      dropdown: [
        {
          title: "Plastic Products",
          sub: [
            "Plastic Chairs",
            "Plastic Tables",
            "Plastic Cupboards",
            "Household",
            "PVC Doors & Frame",
          ],
        },
      ],
    },
    {
      name: "APPLIANCES",
      dropdown: [
        {
          title: "Home Appliances",
          sub: [
            "Refrigerators",
            "Freezers Appliances",
            "Washing Machines",
            "Air Conditioners",
            "Fans",
            "Hot Water Showers",
            "Pressure Washers & Vacuums",
            "Dry Irons & Steam Irons",
            "Personal Care",
            "Sewing Machines",
          ],
        },
        {
          title: "Entertainment",
          sub: [
            "Smart Phones",
            "Televisions",
            "Hifi Systems",
            "Home Theater Systems",
          ],
        },
        {
          title: "Kitchen Appliances & Utensils",
          sub: [
            "Rice Cookers",
            "Electric Kettles",
            "Blenders & Mixers",
            "Microwaves & Ovens",
            "Toasters & Sandwich Maker",
            "Gas Cookers",
            "Induction Cookers",
            "Air Fryers",
            "Cookware",
          ],
        },
      ],
    },
    { name: "ABOUT US", path: "/about" },
  ];

  return (
    // <nav className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
//<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"></nav>
    // <nav className="fixed left-0 w-full bg-gray-100 shadow-md top-28 z-50">

   <nav className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-center space-x-0 px-6 font-semibold relative">
        {/* Desktop Nav */}
        {navLinks.map((link, idx) =>
          link.dropdown ? (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              <button
  aria-haspopup="true"
  aria-expanded={activeDropdown === idx}
 className={`flex items-center px-4 py-2 m-0 transition 
    ${activeDropdown === idx 
      ? "bg-blue-700 text-white" 
      : "text-gray-800 hover:bg-blue-700 hover:text-white"}`}
>
  {link.name}
  <ChevronDown
    size={16}
    className={`ml-1 transition-transform ${
      activeDropdown === idx ? "rotate-180" : ""
    }`}
  />
</button>


              {activeDropdown === idx && (
                <div className="absolute left-0 mt-2 min-w-[18rem] max-w-sm bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-6 z-50">
                  {link.dropdown.map((cat, i) => (
                    <div key={i}>
                      <p className="font-bold text-sm mb-1">{cat.title}</p>
                      <ul className="ml-3 text-sm text-gray-600 space-y-1">
                        {cat.sub.map((subItem, j) => (
                          <li key={j}>
                            <Link
                              to={`/${slugify(cat.title)}/${slugify(subItem)}`}
                              className={`hover:text-green-700 ${
                                location.pathname.includes(
                                  `/${slugify(subItem)}`
                                )
                                  ? "text-green-700 font-semibold"
                                  : ""
                              }`}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={idx}
              to={link.path}
              className={`text-gray-800 hover:text-green-700 transition ${
                location.pathname === link.path
                  ? "text-green-700 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden bg-white shadow-md px-6 py-3 space-y-3">
        {navLinks.map((link, idx) =>
          link.dropdown ? (
            <div key={idx}>
              <button
                className="flex items-center justify-between w-full text-gray-800 font-bold py-2"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === idx ? null : idx)
                }
              >
                {link.name}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdown === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileDropdown === idx ? "max-h-screen" : "max-h-0"
                }`}
              >
                {link.dropdown.map((cat, i) => (
                  <div key={i} className="mt-2 space-y-2">
                    <p className="font-semibold">{cat.title}</p>
                    <ul className="ml-3 text-sm text-gray-600 space-y-1">
                      {cat.sub.map((subItem, j) => (
                        <li key={j}>
                          <Link
                            to={`/${slugify(cat.title)}/${slugify(subItem)}`}
                            className="hover:text-green-700"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={idx}
              to={link.path}
              className={`block py-2 text-gray-800 font-bold ${
                location.pathname === link.path
                  ? "text-green-700 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
