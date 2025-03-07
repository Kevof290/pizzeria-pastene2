import { createContext, useMemo, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id)
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      } else {
        return [...prevCart, { ...pizza, count: 1 }]
      }
    })
  }

  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    )
  }

  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const stateGlobal = useMemo(() => ({
    cart,
    addToCart,
    increaseCount,
    decreaseCount
  }), [cart, addToCart, increaseCount, decreaseCount])

  return (
    <CartContext.Provider value={stateGlobal}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
