
import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner"; // Import your spinner component
import { Clock, Globe, Users, Rocket } from 'lucide-react';
import Navbar from "../Home/Navbar";



const History = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }


  return (
    <>
    <Navbar/>
    <section className="bg-white py-16">
    {/* Hero Section */}
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our History</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        From humble beginnings to becoming a leader in our industry, our journey has been one of innovation, dedication, and growth.
      </p>
    </div>

    {/* Timeline Section */}
    <div className="container mx-auto px-6 mt-12">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute h-full w-1 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {/* Timeline Item 1 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-gray-800">2005 - Founding Year</h3>
              <p className="text-gray-600">Our enterprise was founded with a vision to revolutionize the industry.</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-4">
              <Clock className="text-white w-6 h-6" />
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-4">
              <Globe className="text-white w-6 h-6" />
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-semibold text-gray-800">2010 - Global Expansion</h3>
              <p className="text-gray-600">We expanded our operations to serve clients worldwide.</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-gray-800">2015 - Team Growth</h3>
              <p className="text-gray-600">Our team grew to over 100 employees, fostering innovation and collaboration.</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-4">
              <Users className="text-white w-6 h-6" />
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          {/* Timeline Item 4 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-4">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-xl font-semibold text-gray-800">2020 - Innovation Milestone</h3>
              <p className="text-gray-600">We launched groundbreaking products that set new industry standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Storytelling Section */}
    <div className="container mx-auto px-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/path-to-your-image.jpg"
            alt="Our Journey"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 mb-4">
            Over the years, we’ve faced challenges, celebrated successes, and continuously evolved to meet the needs of our customers. Our commitment to excellence has been the driving force behind our growth.
          </p>
          <p className="text-gray-600">
            Today, we stand proud of our achievements and look forward to a future filled with innovation and opportunity.
          </p>
        </div>
      </div>
    </div>

    {/* Call-to-Action */}
    <div className="container mx-auto px-6 mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us on Our Journey</h2>
      <p className="text-gray-600 mb-6">Explore more about our mission, values, and future goals.</p>
      <a
        href="/about"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Learn More
      </a>
    </div>
  </section>
  </>
  );

};



export default History;
