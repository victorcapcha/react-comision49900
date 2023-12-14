import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;
