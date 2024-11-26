import "./Info.css";
const Info = () => {
  return (
    <div className="product-info">
      <h1 className="product-title">Ridley Yüksek Bel</h1>
      <div className="product-review">
        <ul className="product-star">
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
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>1240 inceleme</span>
      </div>
      <div className="product-price">
        <s className="old-price">$155</s>
        <strong className="new-price">$96</strong>
      </div>
      <p className="product-description">
        Bu ürün, yüksek bel tasarımı ve şık kesimiyle günlük veya özel kombinler
        için idealdir. Hem rahat hem de şık bir görünüm sunar.  
      </p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Renk</span>
            </div>
            <div className="colors-wrapper">
              <div className="color-wrapper">
                <label className="blue-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="red-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper active">
                <label className="green-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="purple-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Beden</span>
            </div>
            <div className="values-list">
              <span className="active">XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
              Sepete Ekle
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Beden Tablosu</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>İstek Listesine Ekle</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Bu Ürünü Paylaş</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Kategoriler:</span>
          <strong>Pantolon, Kadın</strong>
        </div>
        <div className="product-tags">
          <span>Etiketler:</span>
          <a href="#">siyah</a>,<a href="#">beyaz</a>
        </div>
      </div>
    </div>
  );
};
export default Info;
