import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Lógica para cargar el detalle del producto por ID
    const fetchData = async () => {
      const data = await getItemById(id);
      setItem(data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {item && (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* ... otros detalles del producto ... */}
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
