import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Erkek</a>
          </li>
          <li>
            <a href="#">Kadın</a>
          </li>
          <li>
            <a href="#">Anne & Çocuk</a>
          </li>
          <li>
            <a href="#">Ev & Yaşam</a>
          </li>
          <li>
            <a href="#">Süpermarket</a>
          </li>
          <li>
            <a href="#">Ayakkabı & Çanta</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
