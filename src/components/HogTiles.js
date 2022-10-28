import React, { useState } from "react";
import Hog from "./Hog";

function HogTiles({ hogs }) {
  const [showGreased, setShowGreased] = useState(false);
  const [search, setSearch] = useState("");
  const hogsToDisplay = () => {
    let pigs = hogs;
    if (showGreased) {
      pigs = hogs.filter((hog) => hog.greased);
    }
    return pigs.filter((pig) =>
      pig.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <div>
      <div>
        <label>
          Greased:
          <input
            value={showGreased}
            onChange={() => setShowGreased(!showGreased)}
            type="checkbox"
            style={{ marginLeft: 0.5 + "rem" }}
          />
        </label>
      </div>
      <div>
        <label>
          Search:
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
      </div>
      <div class="ui grid container">
        {hogsToDisplay().map((hog) => (
          <Hog hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default HogTiles;
