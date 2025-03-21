import Navbar from '../Home/Navbar';

const WhoWeAre = () => {
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
    <div><Navbar/></div>
  )
}

export default WhoWeAre