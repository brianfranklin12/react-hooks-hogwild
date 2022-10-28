import React, { useState } from "react";

function HogForm({ handleSubmit }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [isGreased, setIsGreased] = useState(false);
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      isGreased,
      weight,
      image,
    };

    handleSubmit(newHog);
  };

  return (
    <form class="hogForm" onSubmit={handleOnSubmit}>
      <div>
        <label name="name">Name: </label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label name="specialty">Specialty: </label>
        <input
          name="specialty"
          onChange={(e) => setSpecialty(e.target.value)}
          value={specialty}
        />
      </div>
      <div>
        <label name="greased">Greased: </label>
        <input
          type="checkbox"
          name="greased"
          value={isGreased}
          onChange={() => setIsGreased(!isGreased)}
        />
      </div>
      <div>
        <label name="weight">Weight: </label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label name="image">Image URL: </label>
        <input
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button name="submit">YeeHaw!</button>
    </form>
  );
}

export default HogForm;
