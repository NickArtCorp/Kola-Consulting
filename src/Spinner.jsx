import "./Spinner.css";
import img from "./kolanut2.png";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={img} alt="Loading..." className="spinner-image" />
    </div>
  );
};

export default Spinner;