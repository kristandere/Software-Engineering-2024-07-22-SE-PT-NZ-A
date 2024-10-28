import React, { useState } from 'react';
import SingleCat from './SingleCat';
import cats from '../data/cats'
import AddCatForm from './AddCatForm';

function BigCats() {
  const [catList, setCatList] = useState(cats);

  const addCat = (newCat) => {
    setCatList((prevCats) => [...prevCats, newCat]);
  };

  const deleteCat = (id) => {
    setCatList((prevCats) => prevCats.filter(cat => cat.id !== id));
  };

  const sortCats = () => {
    const sortedCats = [...catList].sort((a, b) => a.name.localeCompare(b.name));
    setCatList(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  const filterPanthera = () => {
    const pantheraCats = cats.filter(cat => cat.family === 'Pantherinae');
    setCatList(pantheraCats);
  };

  const resetCats = () => {
    setCatList(cats);
  };

  return (
    <div className="BigCats">
      <h2>Big Cats</h2>
      <AddCatForm onAddCat={addCat} />
      <div className="button-container">
        <button onClick={sortCats}>Sort Alphabetically</button>
        <button onClick={reverseCats}>Reverse List</button>
        <button onClick={filterPanthera}>Show Panthera Family</button>
        <button onClick={resetCats}>Reset</button>
      </div>
      <ul className="cats-list">
        {catList.map(cat => (
          <li key={cat.id}>
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
            <button onClick={() => deleteCat(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
