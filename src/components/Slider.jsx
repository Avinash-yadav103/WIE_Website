import "./component.css";
import FirstYear from "../assets/images/FirstYearApocalypse.jpg";

const Slider = () => {
  return (
    <div className="slideshow-container-whole">
      <div className="slideshow-container">
            <img src={FirstYear} style={{ width: "100%", display: "block",height:"auto" }} />
        {/* WIE Overlay */}
        <div className="wie-overlay">WIE</div>
      </div>
    </div>
  );
};

export default Slider;
