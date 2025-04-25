"use client";

import useGSAPAnimations from "@/Hook/useGSAPAnimations";

const AnimationProvider = ({ children }) => {
  useGSAPAnimations();
  return <>{children}</>;
};

export default AnimationProvider;
