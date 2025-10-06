import { useState, useEffect }  from 'react';
import Navbar from './Components/Home/Navbar';
import ServiceSection from './Components/Home/ServiceSection';
import Spinner from './Spinner';
import Footer from './Components/Home/Footer4';


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
      <Footer/>
    </main>

  );

};



export default Services;
