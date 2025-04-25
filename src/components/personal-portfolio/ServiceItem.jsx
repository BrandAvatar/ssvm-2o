import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

const ServiceItem = ({ title, description, link }) => {
  return (
    <div className="service__item">
      <span className="item__number"></span>
      <h3 className="item__title split-text right text-initial">
        <a href={link}>{title}</a>
      </h3>
      <p>{description}</p>
      <Link href={link} className="common-btn__circle">
        <PiArrowUpRightBold size={20} />
      </Link>
    </div>
  );
};

export default ServiceItem;
