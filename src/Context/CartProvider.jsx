import { createContext, useState } from "react"

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        console.log(cartItem)
        const exist = cartItem.find(item => item.id === product.id);
        if (exist) {
            setCartItem(
                cartItem.map(item =>
                    item.id === product.id ?
                        {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            )
        }
        else {
            setCartItem(prev => [...prev, {
                ...product,
                quantity: 1,
            }])
        }
    }

    const removeFromCart = (product) => {
        setCartItem(prev =>
            prev.filter(item => item.id !== product.id)
        )
    }

    const Increment = (product) => {
        setCartItem(prev =>
            prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    const Decrement = (product) => {
        setCartItem(prev =>
            prev.map(item =>
                item.id === product.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }

    const subTotal = cartItem.reduceRight((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);


    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart, removeFromCart, Increment, Decrement, subTotal }}>
            {children}
        </CartContext.Provider>
    )
}