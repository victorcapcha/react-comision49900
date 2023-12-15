import { useState, } from "react"

const MercadoLibre = () => {
      const [products, setProducts] = useState([])
      const [value, setValue] = useState("")
  // useEffect(() => {
  //     fetch("https://api.mercadolibre.com/sites/MLA/search?q=auto")
  //           .then(response => {
  //               return response.json()
  //           })
  //           .then(json => {
  //             setProducts(json.results)
  //           })
  // }, [])
      
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
              .then(response => {
                  return response.json()
                })
              .then(json => {
                setProducts(json.results)
                 })
  }
    

        
  return (
    <div>
      <h1>Mercado Libre</h1>
      <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button>Search</button>
      </form>
      {
        products.map(prod => {
            return (
              <div key={prod.id}>
                    <img src={prod.thumbnail}/>
                    <h3>{prod.title}</h3>
                    <h4>${prod.price}</h4>
              </div>
            )
        })
      }
    </div>
  )
}

export default MercadoLibre