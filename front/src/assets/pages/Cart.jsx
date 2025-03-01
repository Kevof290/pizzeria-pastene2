import React, { useState } from 'react'
import { pizzaCart } from '../utils/pizzas'
import { formatNumber } from '../utils/format'
import '../components/Cart.css'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const more = (id) => {
    setCart(cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }
      }
      return pizza
    }))
  }

  const less = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 }
        }
        return pizza
      })
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce((acc, { price, count }) => acc + price * count, 0)

  return (
    <div className='container-fluid d-flex flex-column min-vh-100'>
      <div className='list-group list-group-flush my-3 mx-auto w-75'>
        {cart.map(({ id, name, price, count, img }) => (
          <div
            className='list-group-item d-flex align-items-center justify-content-between'
            key={id}
          >
            <div className='d-flex align-items-center'>
              <img src={img} className='cart' alt={name} />
              <h3 className='mb-0'>{name}</h3>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mb-0 me-3'>{formatNumber(price)}</p>
              <button className='btn btn-outline-secondary' onClick={() => less(id)}>-</button>
              <p className='mx-3 mb-0'>{count}</p>
              <button className='btn btn-outline-secondary' onClick={() => more(id)}>+</button>
            </div>
          </div>
        ))}
        <div className='my-5 text-end'>
          <h3>Total: {formatNumber(total)}</h3>
          <button className='btn btn-success'>Pagar</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
