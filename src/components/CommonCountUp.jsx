"use client";
import CountUp from "react-countup";

const CommonCountUp = ({ end, duration = 5, suffix, prefix }) => {
  return (
    <CountUp
      end={end}
      duration={duration}
      enableScrollSpy
      suffix={suffix} // Corrected this line
      prefix={prefix} // Corrected this line
      // formattingFn={(value) => {
      //   if (value >= 1_000_000) {
      //     return `${(value / 1_000_000).toFixed(
      //       value % 1_000_000 === 0 ? 0 : 1
      //     )}M`;
      //   } else if (value >= 1000) {
      //     return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`;
      //   }
      //   return value;
      // }}
      formattingFn={(value) => {
        let formattedValue = value;

        if (value >= 1_000_000) {
          formattedValue = `${(value / 1_000_000).toFixed(
            value % 1_000_000 === 0 ? 0 : 1
          )}M`;
        } else if (value >= 1000) {
          formattedValue = `${(value / 1000).toFixed(
            value % 1000 === 0 ? 0 : 1
          )}k`;
        }
        return `${prefix || ""}${formattedValue}${suffix || ""}`;
      }}
    />
  );
};

export default CommonCountUp;
