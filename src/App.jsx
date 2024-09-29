// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {

  const itemsMenu = ["Menu", "productos", "servicios", "contactanos"];
  const [menu, setMenu] = useState(itemsMenu);


  const addItemMenu = (newItem) => {
     setMenu((prevMenu) => [...prevMenu, newItem.name])
  }


  return (
    <>
      <div>
        <Navbar items={menu} addItem={addItemMenu}/>
      </div>
    </>
  );
}

export default App;
