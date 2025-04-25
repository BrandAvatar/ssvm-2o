import Link from "next/link";

const PricingItem = ({ pkg, index, activePackage, onMouseEnter }) => {
  return (
    <div
      className={`pricing-2__item item-popup ${
        activePackage === index ? "active" : ""
      }`}
      onMouseEnter={() => onMouseEnter(index)}
    >
      <div className="package__head">
        <h5 className="package-title">{pkg?.title}</h5>
        <p className="package-info">{pkg?.description}</p>
        <h2 className="package-price">
          ${pkg?.price}/ <span>{pkg?.frequency}</span>
        </h2>
        <Link href={pkg?.link} className="common-btn package-purches">
          Choose The Plan
        </Link>
      </div>
      <div className="package__body">
        <div className="package-list">
          <ul>
            {pkg?.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
