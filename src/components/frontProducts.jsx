import { useEffect } from "react"
import { ProductsCards } from "./cards/Cards" 
import { useProductContext } from "../context/Product.Context"

export const ProductsFront = () => {
  const { products, loading, getProducts } = useProductContext()
  
  useEffect(() => {
    getProducts()
  }, [getProducts])
  
  return (
    <>
        {
          loading 
            ? <article className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </article>
          :<ProductsCards products={products}/> 
        } 
      
    </>
  )
}

export default ProductsFront