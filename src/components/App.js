import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [colorMode, setColorMode] = useState(false);

  function colorChange ( colorMode) {
    setColorMode((colorMode) => !colorMode)
  }



  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (false ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={colorChange}>{colorMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
