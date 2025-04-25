import Link from "next/link";
import React from "react";

const OffcanvasSocial = ({ link, socialType,className = '' }) => {
  let iconClass = "";
  if (socialType === "facebook") {
    iconClass = "fa-brands fa-facebook-f";
  } else if (socialType === "twitter") {
    iconClass = "fa-brands fa-twitter";
  } else if (socialType === "instagram") {
    iconClass = "fa-brands fa-instagram";
  } else if (socialType === "linkedin") {
    iconClass = "fa-brands fa-linkedin-in";
  }

  const finalLink = link === "" || !link ? "#" : link;
  return (
      <li>
        <Link href={finalLink} className={` ${className}`}>
          {iconClass && <i className={iconClass}></i>}
        </Link>
      </li>
  );
};

export default OffcanvasSocial;
