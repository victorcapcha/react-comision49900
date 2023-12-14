// import classes from "./Navbar.module.css"

// const Navbar = () => {
//   return (
//     <nav className={classes.container} style={{ display: "flex" , justifyContent: "space-between"}}>
//       <h1 className={classes.rojo}>Ecommerce</h1>
//       <section className={classes.categories}>
//         <button className="btn btn-cuccess">bebidas</button>
//         <button className="btn btn-danger">galletas</button>
//         <button className="btn btn-warning">dulces</button>
//       </section>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/bebidas">Bebidas</Link>
      {/* ... otros enlaces a categorías ... */}
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
