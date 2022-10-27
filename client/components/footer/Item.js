import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h2>{title}</h2>
      {Links.map((link) => (
        // o: destructuring is your friend
        <li key={link.name}>
          <a href={link.link}>
            {link.name}
            {link.address}
            {link.hours}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
