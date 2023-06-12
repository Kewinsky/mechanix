import "./ReviewItemStyles.scss";
import { BsStarFill, BsStar } from "react-icons/bs";

const ReviewItemComponent = () => {
  const stars = 4;
  const blank_stars = 5 - stars;

  return (
    <div className="review-item">
      <div className="review-item-header">
        <h1>User</h1>
        <p>29 April, 2022</p>
      </div>
      <div className="review-item-stars">
        {Array(stars).fill(
          <p>
            <BsStarFill size="18" />
          </p>
        )}
        {Array(blank_stars).fill(
          <p>
            <BsStar size="18" />
          </p>
        )}
      </div>
      <p className="review-item-content">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aliquam placerat.
      </p>
    </div>
  );
};

export default ReviewItemComponent;
