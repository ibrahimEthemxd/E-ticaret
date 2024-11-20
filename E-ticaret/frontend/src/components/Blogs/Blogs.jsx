import BlogItem from "./BlogItem";
import "./Blogs.css";
const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Blogumuzdan</h2>
          <p>Sezonun en yeni trendlerini keşfedin, şıklığınızı tamamlayın!</p>
        </div>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </ul>
      </div>
    </section>
  );
};
export default Blogs;
