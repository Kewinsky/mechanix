import { useState } from "react";
import "./ReviewFormStyles.scss";
import { BsStarFill, BsStar } from "react-icons/bs";

const ReviewFormComponent = () => {
  const [rating, setRating] = useState(4);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <form className="review-form">
      <div className="review-form-wrapper">
        <textarea
          placeholder="Your review *"
          required
          className="review-input"
        />

        <input
          type="text"
          placeholder="Enter your name *"
          required
          className="review-input"
        />
        <input
          type="email"
          placeholder="Enter your email *"
          required
          className="review-input"
        />
        <div className="review-rating">
          <p>Your Rating *</p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className="review-rating-stars"
              >
                {star <= rating ? (
                  <BsStarFill size="18" />
                ) : (
                  <BsStar size="18" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button type="submit" className="review-submit">
        Submit
      </button>
    </form>
  );
};

export default ReviewFormComponent;
