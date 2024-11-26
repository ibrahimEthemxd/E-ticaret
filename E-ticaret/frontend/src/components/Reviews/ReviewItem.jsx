const ReviewItem = () => {
  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src="/img/avatars/avatar1.jpg" alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
        </ul>
        <div className="comment-meta">
          <strong>İEÖ</strong>
          <span>-</span>
          <time>Kasım 25, 2024</time>
        </div>
        <div className="comment-description">
          <p>Bu ürün gerçekten harika, kaliteli bir tasarıma sahip!</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
