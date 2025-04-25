import React from "react";

const FourDots = ({size = '13',color='white'}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="1.75" stroke={color} strokeWidth="0.5" />
      <circle cx="3" cy="10" r="1.75" stroke={color} strokeWidth="0.5" />
      <circle cx="10" cy="3" r="1.75" stroke={color} strokeWidth="0.5" />
      <circle cx="10" cy="10" r="1.75" stroke={color} strokeWidth="0.5" />
    </svg>
  );
};

export default FourDots;
