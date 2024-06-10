import { CartActions } from "../reducers/cart-reducer";
import type { Guitar } from "../types"

type GuitarProps = {
  guitar: Guitar;
  dispatch: React.Dispatch<CartActions>

}

const Guitar = ({ guitar, dispatch } : GuitarProps) => {
  
  const {name, image, description, price} = guitar
  
 return (
   <div className="flex gap-x-5">
       <img className="w-24 md:w-32" src={`/img/${image}.jpg`} alt={`Foto de la guitarra modelo ${name}`} />
       <div className="flex flex-col gap-y-3">
           <h3 className="text-3xl font-bold">{name}</h3>
           <p>{description}</p>
           <span className="text-3xl font-bold text-yellow-500">$ {price}</span>
           <button 
              type="button"
              className="w-fit md:w-60 text-white bg-black py-3 px-9"
              onClick={()=> {dispatch({type: 'add-to-cart', payload: {item: guitar}})}}>
              Agregar al carrito
           </button>
       </div>
   </div>
 )
}

export default Guitar