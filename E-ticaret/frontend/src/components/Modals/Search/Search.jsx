import { message } from "antd";
import "./Search.css";
import PropTypes from "prop-types";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSearch = async (e) => {
    e.preventDefault();
    const productName = e.target[0].value;

    try {
      const res = await fetch(`${apiUrl}/api/products/search/${productName}`);
      if (!res.ok) {
        message.warning("Ürün getirme hatası");
        return;
      }
      const data = await res.json();
      setSearchProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Popüler Aramalar</h3>
        <p className="modal-text">Aradığınız ürünü görmek için yazın.</p>
        <form className="search-form">
          <input
            type="text"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>İlgili Sonuçlar</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src="/img/products/product1/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src="/img/products/product2/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsSearchShow(false)}
      ></div>
    </div>
  );
};
export default Search;

Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};
