import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1>{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
