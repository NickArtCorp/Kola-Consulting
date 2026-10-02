import { useState, useEffect }  from 'react';
import Navbar from './Components/Home/Navbar';
import ServiceSection from './Components/Home/ServiceSection';
import Spinner from './Spinner';
import Footer from './Components/Home/Footer4';


const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors'>
      <Navbar />
      <main className="flex-1">
        <ServiceSection />
      </main>
      <Footer />
    </div>
  );
};



export default Services;
