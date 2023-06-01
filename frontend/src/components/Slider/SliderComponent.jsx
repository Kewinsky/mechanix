import "./SliderStyles.scss";
import photo_1 from "../../assets/images/slider_photo_1.jpeg";
import photo_2 from "../../assets/images/slider_photo_2.jpeg";
import photo_3 from "../../assets/images/slider_photo_3.jpeg";

const SliderComponent = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={photo_2} className="d-block w-100" alt="..." />
          <div class="carousel-overlay">
            <div className="carousel-overlay-content">
              <h4>Custom Keyboards</h4>
              <p>$ 149.99</p>
              <button class="btn btn-outline-light">View Product</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={photo_1} className="d-block w-100" alt="..." />
          <div class="carousel-overlay">
            <div className="carousel-overlay-content">
              <h4>Keychron K2</h4>
              <div className="carousel-price-group">
                <p className="discount">$ 79.99</p>
                <p>$ 79.99</p>
              </div>
              <button class="btn btn-outline-light">View Product</button>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={photo_3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
