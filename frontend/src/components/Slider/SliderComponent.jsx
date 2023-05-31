import "./SliderStyles.scss";
import photo_1 from "../../assets/images/slider_photo_1.png";
import photo_2 from "../../assets/images/slider_photo_2.jpeg";
import photo_3 from "../../assets/images/slider_photo_3.jpeg";

const SliderComponent = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide mb-5"
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
          <img src={photo_1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Search for Recipes</h4>
            <p className="text-center">
              Nullam efficitur nunc sit risus id ex amet ornare bibendum.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={photo_2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Filtering & Sorting</h4>
            <p className="text-center">
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={photo_3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>Choose Recipe and Cook!</h4>
            <p className="text-center">
              Donec ut risus id ex faucibus bibendum a dictum erat condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
