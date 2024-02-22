import './Popup.css';  // Importa el archivo CSS
import { useProducts } from '../hooks/useProducts';
import { useEffect } from 'react';
// import { useProductContext } from '../context/productContext'; 


// eslint-disable-next-line react/prop-types
const ProductDetails = ({ productId, isOpen, onClose}) => {

  const { getProductsById, productById } = useProducts()

  useEffect(() => {
    getProductsById(productId)
  }, [getProductsById, productId]);

  if (!isOpen){return null} 


  return (
    
    <section className="pop-up">


      {productById && (
        <>
        <div className="overlay" onClick={onClose}></div>
          <div className='popup'>
            
            <div className='img'>
              <img src={productById.image} alt={productById.name} />
              <p className='price'>{productById.price}</p>
            </div>
            <div className='text'>
              <h3>{productById.title}</h3>
              <p className='content'>{productById.description}</p>
            </div>
        
            <button className='buttonModal'><a href='/Payment'>Buy Now</a></button>
            <button className='buttonModal'><a href='/Contact'>Contact us</a></button>
          </div>
        </>
      )}
      
    </section>
    
  );
};

export default ProductDetails;