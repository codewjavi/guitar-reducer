import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions = 
    { type: 'add-to-cart', payload: {item:Guitar} } |
    { type: 'remove-from-cart', payload: {item:Guitar['id']} } |
    { type: 'increase-quantity', payload: {item:Guitar['id']} } |
    { type: 'decrease-quantity', payload: {item:Guitar['id']} } |
    { type: 'clear-cart' }

export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export const cartReducer = (
        state: CartState = initialState,
        action: CartActions
    ) => {

    if(action.type === 'add-to-cart') {

        const itemExists = state.cart.findIndex(guitar => guitar.id === action.payload.item.id)

        let updatedCart : CartItem[] = []

        if (itemExists < 0) {
        const newItem : CartItem = {...action.payload.item, quantity : 1}
        updatedCart = [...state.cart, newItem]
        }
        else {
            if (state.cart[itemExists].quantity >= MAX_ITEMS) return
                updatedCart = [...state.cart]
                updatedCart[itemExists].quantity++
             }


        console.log('From add-to-cart');
        
        return {
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === 'remove-from-cart') {
        return {
            ...state,
        }
    }

    if(action.type === 'decrease-quantity') {
        return {
            ...state,
        }
    }

    if(action.type === 'increase-quantity') {
        return {
            ...state,
        }
    }

    if(action.type === 'clear-cart') {
        return {
            ...state,
        }
    }

    return state
}