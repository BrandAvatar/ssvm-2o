import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = ({ link, name, className }) => {
  const finalLink = link === "" || !link ? "#0" : link;
  const finalName = name === "" || !name ? "Demo" : name;

  return (
    <Link href={finalLink} className={className}>
      {finalName}
    </Link>
  );
};

export default MobileMenu;
