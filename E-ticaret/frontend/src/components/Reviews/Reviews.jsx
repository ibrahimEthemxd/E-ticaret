import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>3 yorum Lastikli Paçalı Düz Renk Eşofman Altı için</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Yorum Yap</h2>
        <ReviewForm />
      </div>
    </div>
  );
};
export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
};
