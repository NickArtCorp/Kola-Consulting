import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';
import Header_who from './Header_who';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const whoWeAre = () => {
   const {t} = useTranslation();
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
    <Header_who/>
    
    </>
  )
}

export default whoWeAre;