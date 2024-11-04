import React from 'react';

function SingleCat({ name, latinName, image }) {
  return (
    <div className="single-cat">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{latinName}</p>
    </div>
  );
}

export default SingleCat;
