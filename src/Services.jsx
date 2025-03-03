import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Components/Home/Navbar';
import ServiceSection from './Components/Home/ServiceSection';
import Spinner from './Spinner';


const Services = () => {
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

    <main className='font-sans'>
      <Navbar/>
      <ServiceSection/>
    </main>

  );

};



export default Services;
