import Link from "next/link";

// BlogItem.jsx
const BlogItem = ({ blog }) => {
  const { title, author, date, link, image, animation } = blog;

  return (
    <div className="col-12">
      <div className={`blog__item reveal ${animation}`}>
        <div className="blog-content">
          <div className="blog-meta">
            <ul>
              <li>
                By : <Link href={link}>{author}</Link>
              </li>
              <li>
                Date :<Link href={link}>{date}</Link>
              </li>
            </ul>
          </div>
          <h4 className="blog-title">
            <Link href={link}>{title}</Link>
          </h4>
          <Link href={link} className="common-btn common-btn--color-reverse">
            Read More
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <figure className="blog-thumb">
          <Link href={link}>
            <img src={image} alt={title} />
          </Link>
        </figure>
      </div>
    </div>
  );
};

export default BlogItem;
