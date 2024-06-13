import { useState, useEffect } from "react"
import type { Guitar, CartItem } from "../types/index"

export const useCart = () => {

    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])

    function removeFromCart(id : Guitar['id']){
        setCart(prevBag => prevBag.filter(product => product.id !== id))
    }

    function decreaseQuantity(id : Guitar['id']){
        const updatedCart = cart.map(product => {
        if(product.id === id && product.quantity > MIN_ITEMS) {
            return {
            ...product,
            quantity: product.quantity - 1
            }}
        return product
        })
        setCart(updatedCart)
    }
    
    function increaseQuantity(id : Guitar['id']){
        const updatedCart = cart.map(product => {
        if(product.id === id && product.quantity < MAX_ITEMS) {
            return {
            ...product,
            quantity: product.quantity + 1
            }}
        return product
        })
        setCart(updatedCart)
    }

  function clearCart(){
    setCart([])
  }



    return{
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart
    }
}