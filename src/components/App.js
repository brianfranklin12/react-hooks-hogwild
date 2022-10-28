import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import HogForm from "./HogForm";

import hogs from "../porkers_data";

function App() {
  const [pigs, setPigs] = useState(hogs);

  const handleSubmit = (newHog) => {
    setPigs([...pigs, newHog]);
  };

  return (
    <div className="App">
      <Nav />
      <HogForm handleSubmit={handleSubmit} />
      <HogTiles hogs={pigs} />
    </div>
  );
}

export default App;
