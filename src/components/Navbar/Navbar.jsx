import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <h1 className={classes.rojo}>Ecommerce</h1>
      <section>
        <button>bebidas</button>
        <button>galletas</button>
        <button>dulces</button>
      </section>
    </nav>
  )
}

export default Navbar