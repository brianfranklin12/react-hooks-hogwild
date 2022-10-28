import React, { useState } from "react";

function Hog({ hog }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div class="ui cards">
      <div class="ui card pigTile" onClick={() => setIsFlipped(!isFlipped)}>
        {!isFlipped && (
          <>
            <div class="image">
              <img
                class="right floated mini ui image"
                src={hog.image}
                alt={hog.name}
              />
            </div>
            <div class="content">
              <h3>{hog.name}</h3>
            </div>
          </>
        )}
        {isFlipped && (
          <>
            <div class="content">
              <div>
                Specialty:
                <span> {hog.specialty}</span>
              </div>
              <div>
                Greased:
                <span> {hog.greased ? "true" : "false"}</span>
              </div>
              <div>
                Weight:
                <span> {hog.weight} lbs</span>
              </div>
              <div>
                Highest Medal Achieved:
                <span> {hog["highest medal achieved"]}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hog;
