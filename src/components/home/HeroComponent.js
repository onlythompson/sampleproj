import "./Homepage.css";
import restauranfood from "../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

const HeroComponent = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("disableReserveTable :", props.showReserveButton)
    console.log("handleclick")
    navigate("/booking")
  }

  return (
    <>
      <section className="hero-background"></section>
      <section className="hero-section">
        <div className="hero-content">
          <div>
            <h1 className="title-text">Little Lemon</h1>
            <h2 className="subtitle-text">Chicago</h2>
            <p className="paragraph-text">
              We are truly a family owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist
            </p>
          </div>
          <div className="hero-reserve">
            {
              props.showReserveTableButton && <button className="primary-button medium-text"onClick={handleClick}>Reserve a Table</button>
            }
          </div>
        </div>
        <div className="hero-image">
          <img src={restauranfood} alt="banner_pics" />
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
