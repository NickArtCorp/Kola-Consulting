import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';

const WhoWeAre = () => {
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
    </>
  )
}

export default WhoWeAre;