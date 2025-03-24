import React, { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { AuthContext } from '../store/AuthContext'
import { formatNumber } from '../utils/format'
import '../styles/Cart.css'
import axios from 'axios'
import { toast } from 'sonner'

const Cart = () => {
  const { cart, increaseCount, decreaseCount, clearCart } = useContext(CartContext)
  const { token, isAuthenticated } = useContext(AuthContext)

  const total = cart.reduce((acc, { price, count }) => acc + price * count, 0)

  const handleCheckout = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/checkouts', { cart }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        toast.success('Pago procesado correctamente')
        clearCart() // Vaciar el carrito después de una compra exitosa
      } else {
        toast.error('Error al procesar el pago')
      }
    } catch (error) {
      toast.error('Error al procesar el pago')
    }
  }

  return (
    <div className='container mt-5'>
      <h2>Carrito de Compras</h2>
      {cart.length === 0
        ? (
          <p>No hay elementos en el carrito.</p>
          )
        : (
          <ul className='list-group'>
            {cart.map((pizza) => (
              <li key={pizza.id} className='list-group-item d-flex justify-content-between align-items-center'>
                <img src={pizza.img} className='cart rounded-1' alt={pizza.name} />
                <div className='fs-5'>
                  {pizza.name.toUpperCase()} - {formatNumber(pizza.price)}
                </div>
                <div>
                  <button className='btn btn-sm btn-outline-danger mx-2 fs-5' onClick={() => decreaseCount(pizza.id)}>-</button>
                  <span className='fs-5'>{pizza.count}</span>
                  <button className='btn btn-sm btn-outline-success mx-2 fs-5' onClick={() => increaseCount(pizza.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          )}
      <div className='my-5 text-end'>
        <h3>Total: {formatNumber(total)}</h3>
        <button className='btn btn-success' disabled={!isAuthenticated} onClick={handleCheckout}>Pagar</button>
      </div>
    </div>
  )
}

export default Cart
