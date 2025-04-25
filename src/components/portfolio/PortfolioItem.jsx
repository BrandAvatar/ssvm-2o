import Link from "next/link";

// components/PortfolioItem.jsx
const PortfolioItem = ({ image, title, year, tags, revealAnimation, link }) => {
  return (
    <div className="portfolio__item">
      <figure className={`item__thumb reveal ${revealAnimation}`}>
        <img src={image} alt={title} />
      </figure>
      <div className="item__content">
        <div className="item__tags">
          <ul>
            {tags?.map((tag, index) => (
              <li key={index}>
                <Link href={link}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="item__footer">
          <h4 className="item__title">
            <Link href={link}>{title}</Link>
          </h4>
          <span className="item__year">// {year}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
