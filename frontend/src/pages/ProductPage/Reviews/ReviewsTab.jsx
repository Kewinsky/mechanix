import ReviewItemComponent from "./ReviewItem/ReviewItemComponent";
import ReviewFormComponent from "./ReviewForm/ReviewFormComponent";
import "./ReviewsStyles.scss";

const ReviewsTab = () => {
  return (
    <div className="reviews-tab">
      <div>
        <h1>13 Reviews for Keyboard K2 Wireless</h1>
        <ReviewItemComponent />
        <ReviewItemComponent />
        <ReviewItemComponent />
      </div>
      <div className="form">
        <h1>Add a Review</h1>
        <p className="content">
          Your email address will not be published. Required fields are marked *
        </p>
        <ReviewFormComponent />
      </div>
    </div>
  );
};

export default ReviewsTab;
