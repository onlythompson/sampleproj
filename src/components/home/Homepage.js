import "./Homepage.css";
// import restauranfood from "../../assets/restauranfood.jpg";
import salad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemon_dessert from "../../assets/lemon dessert.jpg";
import mario from "../../assets/Mario and Adrian A.jpg";
import restaurant from "../../assets//restaurant.jpg";
import chefB from "../../assets/restaurant chef B.jpg";
import HeroComponent from "./HeroComponent";

const Homepage = () => {
  return (
    <main className="homepage">
      {/* <section className="hero-background"></section>
      <section className="hero-section">
        <div className="hero-content">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are truly a family owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist
            </p>
          </div>
          <div className="hero-reserve">
            <button className="primary-button">Reserve a Table</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={restauranfood} alt="banner_pics" />
        </div>
      </section> */}
      <HeroComponent disableReserveTable={false} />
      <section className="highlights-section">
        <div className="specials-header">
          <h1>This week specials!</h1>
          <button className="primary-button">Online Menu</button>
        </div>
        <div id="special-article">
          <article>
            <img className="specials-img" src={salad} alt="Greek Salad" />
            <div className="price">
              <h3>Greek Salad</h3>
              <h4>$12.99</h4>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </article>
          <article>
            <img className="specials-img" src={bruchetta} alt="Bruchetta" />
            <div className="price">
              <h3>Bruchetta</h3>
              <h4>$12.99</h4>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </article>
          <article>
            <img
              className="specials-img"
              src={lemon_dessert}
              alt="Lemon Dessert"
            />
            <div className="price">
              <h3>Lemon Dessert</h3>
              <h4>$12.99</h4>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be imagined
            </p>
          </article>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-content">
          <div className="testimony">
            <h4>Rating</h4>
            <div>
              <img src={mario} alt="Adrain" />
              <h5>Adrain</h5>
            </div>
            <p>Labore dolor tempor elit id consectetur officia cillum.</p>
          </div>
          <div className="testimony">
            <h4>Rating</h4>
            <div>
              <img src={mario} alt="Adrain" />
              <h5>Adrain</h5>
            </div>
            <p>Labore dolor tempor elit id consectetur officia cillum.</p>
          </div>
          <div className="testimony">
            <h4>Rating</h4>
            <div>
              <img src={mario} alt="Adrain" />
              <h5>Adrain</h5>
            </div>
            <p>Labore dolor tempor elit id consectetur officia cillum.</p>
          </div>
          <div className="testimony">
            <h4>Rating</h4>
            <div>
              <img src={mario} alt="Adrain" />
              <h5>Adrain</h5>
            </div>
            <p>Labore dolor tempor elit id consectetur officia cillum.</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="about-image">
          <img id="img1" src={restaurant} alt="banner_pics" />
          <img id="img2" src={chefB} alt="banner_pics" />
        </div>
      </section>
    </main>
  );
};

export default Homepage;
