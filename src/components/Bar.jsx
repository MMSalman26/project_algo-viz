import React from "react";

function Bar(props) {
  return (
    <div
      className={`mx-[0.6px] w-[3px] xs:mx-[1px] xs:w-[4px] sm:mx-[2px] sm:w-[6px] md:mx-[3px] md:w-[8px] lg:mx-[4px] lg:w-[10px] xl:mx-[5px] xl:w-[14px]`}
      style={{
        height: `${props.height}rem`,
        backgroundImage: `${props.color}`,
      }}
    ></div>
  );
}

export default Bar;
