import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Sidebar() {
  const filterByPrice = (lowerBound, upperBound);
  return (
    <div className="sidebar">
      <Dropdown>
        <Dropdown.Toggle variant="success">Filter by Price</Dropdown.Toggle>

        <Dropdown.Menu onChange={filterByPrice}>
          <Dropdown.Item>Filter by All</Dropdown.Item>
          <Dropdown.Item>$0-$50</Dropdown.Item>
          <Dropdown.Item>$51-$100</Dropdown.Item>
          <Dropdown.Item>$101-$200</Dropdown.Item>
          <Dropdown.Item>$201-$300</Dropdown.Item>
          <Dropdown.Item>$301-$500</Dropdown.Item>
          <Dropdown.Item>$501-$900</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
