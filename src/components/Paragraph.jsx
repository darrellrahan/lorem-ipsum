import React from "react";

const Paragraph = (prop) => {
  const { text, className } = prop;
  return <p className={className}>{text}</p>;
};

export default Paragraph;
