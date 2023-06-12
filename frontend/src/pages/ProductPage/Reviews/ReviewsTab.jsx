import ReviewItemComponent from "./ReviewItem/ReviewItemComponent";
import ReviewFormComponent from "./ReviewForm/ReviewFormComponent";
import "./ReviewsStyles.scss";

const ReviewsTab = () => {
  return (
    <div className="reviews-tab">
      <div className="reviews-review">
        <h1 className="reviews-review-header">
          13 Reviews for Keyboard K2 Wireless
        </h1>
        <ReviewItemComponent />
        <ReviewItemComponent />
        <ReviewItemComponent />
      </div>
      <div className="reviews-form">
        <h1 className="reviews-form-header">Add a Review</h1>
        <p className="reviews-form-content">
          Your email address will not be published. Required fields are marked *
        </p>
        <ReviewFormComponent />
      </div>
    </div>
  );
};

export default ReviewsTab;
