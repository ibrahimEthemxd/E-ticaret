import CategoryItem from "./CategoryItem";
import "./Categories.css";
const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
          <p>Yeni Sezon Moda ve Stil Sahipleri</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
};
export default Categories;