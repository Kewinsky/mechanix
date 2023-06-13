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
      <div className="wrapper">
        <textarea placeholder="Your review *" required />

        <input type="text" placeholder="Enter your name *" required />
        <input type="email" placeholder="Enter your email *" required />
        <div className="rating">
          <p>Your Rating *</p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className="rating-stars"
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewFormComponent;
