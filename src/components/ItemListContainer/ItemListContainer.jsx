// const ItemListContainer = () => {
//   return (
//     <div>
//         <h1>{}</h1>
//     </div>
//   )
// }

// export default ItemListContainer

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Catalog from './Catalog';
import { getItemsByCategory } from '../data/data'; // Suponiendo que tienes una función así

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Lógica para cargar los productos por categoría
    const fetchData = async () => {
      const data = await getItemsByCategory(id);
      setItems(data);
    };

    fetchData();
  }, [id]);

  return <Catalog items={items} />;
};

export default ItemListContainer;
