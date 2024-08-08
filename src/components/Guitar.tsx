import { toast } from "react-toastify";
import { useCart } from "../hooks/useCart";
import type { Guitar } from "../types"

type GuitarProps = {
  guitar: Guitar;
}

const Guitar = ({ guitar } : GuitarProps) => {
  
  const { dispatch } = useCart()
  
  const {name, image, description, price} = guitar
  
  return (
    <div className="flex gap-x-5">
        <img className="w-24 md:w-32" src={`/img/${image}.jpg`} alt={`Photo of the ${name} model guitar`} />
        <div className="flex flex-col gap-y-3">
            <h3 className="text-3xl font-bold">{name}</h3>
            <p>{description}</p>
            <span className="text-3xl font-bold text-yellow-500">$ {price}</span>
            <button 
                type="button"
                className="w-fit md:w-60 text-white bg-black hover:bg-neutral-700 py-3 px-9"
                onClick={() => {
                    dispatch({type: 'add-to-cart', payload: {item: guitar}})
                    toast.success(`${guitar.name} added to cart!`, {
                      autoClose: 2000
                    });
                  }}>
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default Guitar