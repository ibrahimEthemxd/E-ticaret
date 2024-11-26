import "./CampaignItem.css";
const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Moda Ayı <br />
        Çanakkalede Hazır <br />
        Ethos
      </h3>
      <p className="campaign-desc">
        En yeni trendlerle dolu koleksiyonları keşfedin. Şıklığı ve konforu bir
        araya getiren tasarımlar sizin için hazır
      </p>
      <a href="#" className="btn btn-primary">
        Hepsini Gör
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};
export default CampaignItem;
