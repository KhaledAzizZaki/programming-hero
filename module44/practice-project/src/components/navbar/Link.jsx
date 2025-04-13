import React from "react";

const Link = ({ route }) => {
  const { name, url } = route;
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

export default Link;
