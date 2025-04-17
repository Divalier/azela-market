"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Service data with sub-services
const services = [
  {
    id: 1,
    title: "Maintenance",
    image: "/market/Maintenance & Construction.jpg",
    subServices: [
      {
        name: "Motor Wash & Repair",
        description:
          "Keep your vehicle in top condition! Our Motor Wash & Repair services connect you with skilled professionals for servicing, parts installation, and detailing, ensuring your vehicle always looks and performs its best.",
        image: "/market/service/Maintenance & Construction/Motor Wash & Repair.jpg",
      },
      {
        name: "Electronics & Network Installation",
        description:
          "Upgrade your technology seamlessly. Our Electronics & Network Installation services offer expert setup for IT infrastructure, home automation, and industrial electronic repairs, tailored to your needs.",
        image: "/market/service/Maintenance & Construction/lectronics & Network Installation.jpg",
      },
      {
        name: "House Interior & Exterior Design",
        description:
          "Create your dream home with our House Interior & Exterior Design services. Find professionals for renovations, landscaping, and construction, turning your vision into reality.",
        image: "/market/service/Maintenance & Construction/House Interior & Exterior Design.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Consultation",
    image: "/market/Consultation & Partnership.jpg",
    subServices: [
      {
        name: "Business Partnering",
        description:
          "Expand your business network! Our Business Partnering services connect you with strategic allies, fostering collaborations that drive growth and innovation.",
        image: "/market/service/Consultation & Partnership/Business Partnering.jpg",
      },
      {
        name: "Project Planning & Execution",
        description:
          "Navigate complex projects with ease. Our Project Planning & Execution services provide professional guidance for business expansions, ensuring successful outcomes.",
        image: "/market/service/Consultation & Partnership/Project Planning & Execution.jpg",
      },
      {
        name: "Tender",
        description:
          "Unlock new opportunities. We facilitate government and private tenders, connecting you with valuable cooperation opportunities.",
        image: "/market/service/Consultation & Partnership/Tender & Cooperation.jpg",
      },
      {
        name: "Business Development",
        description:
          "Fuel your business growth with our Business Development services. Access market research, feasibility studies, and funding assistance to take your enterprise to the next level.",
        image: "/market/service/Consultation & Partnership/Business Development.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Transportation ",
    image: "/market/Transportation & Logistics.jpg",
    subServices: [
      {
        name: "Logistics & Supply Chain",
        description:
          "Optimize your supply chain with our comprehensive Logistics & Supply Chain services. From warehousing to bulk transport, we ensure efficient and reliable operations.",
        image: "/market/service/Transportation & Logistics/Logistics & Supply Chain.jpg",
      },
      {
        name: "Door-to-Door Business Delivery",
        description:
          "Experience fast and reliable deliveries. Our Door-to-Door Business Delivery service provides fast-tracked solutions tailored to your business needs.",
        image: "/market/service/Transportation & Logistics/Door-to-Door Business Delivery.jpg",
      },
      {
        name: "Accommodations & Rentals",
        description:
          "Find the perfect temporary housing. Our Accommodations & Rentals service offers comfortable options for business professionals, ensuring a smooth stay.",
        image: "/market/service/Transportation & Logistics/Accommodations & Rentals.jpg",
      },
      {
        name: "Shipping & Freight",
        description:
          "Navigate international trade with ease. Our Shipping & Freight services facilitate import/export, ensuring seamless global transactions.",
        image: "/market/service/Transportation & Logistics/Shipping & Freight.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Products",
    image: "/market/Product.jpg", // Replace with a generic products image
    subProducts: [
      {
        name: "Food & Restaurants",
        description: "Welcome to our Food & Restaurant marketplace! Discover a vast selection of fresh ingredients, packaged goods, and restaurant supplies. Whether you're a home cook or a professional chef, find everything you need to create culinary masterpieces.",
        image: "/market/products/Food & Restaurants.jpg", // Replace with specific food image
      },
      {
        name: "Household Materials",
        description: "Transform your living space with our extensive range of Household Materials. From stylish furniture to essential appliances, we've curated a collection to make your home comfortable and beautiful.",
        image: "/market/products/Household Materials.jpg", // Replace with household image
      },
      {
        name: "Electronic Devices",
        description: "Step into the future with our Electronic Devices category. Explore the latest smartphones, laptops, home gadgets, and industrial machinery. We offer cutting-edge technology for both personal and professional use.",
        image: "/market/products/Electronic Devices.jpg", // Replace with electronics image
      },
      {
        name: "Motor & Spare Parts",
        description: "Keep your vehicles and machinery running smoothly with our Motor & Spare Parts section. Find a wide variety of parts, accessories, and repair kits, all from trusted suppliers.",
        image: "/market/products/Motor & Spare Parts.jpg", // Replace with motor parts image
      },
      {
        name: "Land & Parcels",
        description: "Invest in your future with our Land & Parcels marketplace. Browse verified land listings, investment properties, and real estate services. We're here to help you find your perfect piece of land.",
        image: "/market/products/Land & Parcels.jpg", // Replace with land image
      },
    ],
  },
];
const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default expanded service
  const [activeSubIndex, setActiveSubIndex] = useState(0); // Active sub-service slide
  const [autoSlide, setAutoSlide] = useState(true); // Auto-slide state

  // Auto-slide effect
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActiveSubIndex((prev) =>
          prev === services[expandedIndex].subServices.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide, expandedIndex]);

  return (
    <section className="py-4 w-full h-[80vh]">
      <div className="container grid grid-cols-1 md:grid-cols-2   px-2 md:px-6  gap-6">
        {/* Left Side: 2x2 Grid (Service Cards) */}
        <div className="absolute md:relative  w-[100%] md-h-full z-10 md:z-0  grid grid-cols-2 md:grid-cols-2 gap-1 md:gap-4 md:6  md:p-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative container h-6 md:h-50 bg-white rounded-lg shadow-md p-1 md:p-4 cursor-pointer transition-all duration-500 ${
                expandedIndex === index
                  ? "scale-105 shadow-xl"
                  : "hover:scale-105"
              }`}
              onClick={() => setExpandedIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={100}
                className="rounded-lg hidden w-full h-[70%] md:flex"
              />
              <h3 className="text-sm md:text-lg font-semibold mt-0 md:mt-2">
                {service.title}
              </h3>

              {/* View More Button */}
              {expandedIndex !== index && (
                <button className="mt-2 text-blue-500 underline">
                  {" "}
                  <span className="hidden md:flex">View More</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side: Expanded View (Sub-Service Slideshow) */}
        <motion.div
          className=" flex flex-col justify-between w-full bg-white h-[70vh] rounded-lg shadow-md relative  "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sub-Service Image */}
          <Image
            src={services[expandedIndex].subServices[activeSubIndex].image}
            alt="Expanded"
            width={500}
            height={300}
            className="rounded-lg w-full h-[60%]"
          />
          <div className="relative -mt-[100px]">
            {/* Sub-Service Details */}
            <h3 className="text-xl font-bold mt-4">
              {services[expandedIndex].subServices[activeSubIndex].name}
            </h3>
            <p className="text-gray-600 mt-2">
              {services[expandedIndex].subServices[activeSubIndex].description}
            </p>
            {/* Controls */}
            <div className="px-5 pb-4 flex justify-between">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() => setAutoSlide(!autoSlide)}
              >
                {autoSlide ? "Pause" : "Resume"}
              </button>

              <div className="flex gap-4">
                <button
                  className="bg-gray-600 text-white px-2 py-2 md:rounded-md rounded-full"
                  onClick={() =>
                    setActiveSubIndex((prev) =>
                      prev === 0
                        ? services[expandedIndex].subServices.length - 1
                        : prev - 1
                    )
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  className="bg-gray-600 text-white px-2 py-2 md:rounded-md rounded-full"
                  onClick={() =>
                    setActiveSubIndex((prev) =>
                      prev === services[expandedIndex].subServices.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={() => setExpandedIndex(null)}
              >
                visit
              </button>
            </div>{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
