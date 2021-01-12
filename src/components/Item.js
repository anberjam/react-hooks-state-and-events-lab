import React, {useState} from "react";

function Item({ name, category }) {
  const [location, setLocation] = useState(false)

  function handleLocation () {
    setLocation((location) => !location)
  }
  
  return (
    <li className={location ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={location ? "remove" : "add"} onClick = {handleLocation}>{location? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
