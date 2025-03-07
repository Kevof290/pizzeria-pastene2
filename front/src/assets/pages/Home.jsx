import React, { useEffect, useState, useContext } from 'react'
import CardPizza from '../components/CardPizza'
import { formatNumber } from '../utils/format'
import { CartContext } from '../store/CartContext'
import '../styles/Home.css'
import { toast, Toaster } from 'sonner'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const { addToCart } = useContext(CartContext)
  const url = 'http://localhost:5000/api/pizzas'

  const getPizzas = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setPizzas(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getPizzas()
  }, [])

  const handleAddToCart = (pizza) => {
    addToCart(pizza)
    toast.info(`${pizza.name} ha sido agregado al carrito`)
  }

  return (
    <main className='container my-3'>
      <Toaster position='bottom-right' expand />
      <div className='row row-cols-1 row-cols-md-6 g-2'>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            desc={pizza.desc}
            id={pizza.id}
            img={pizza.img}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={formatNumber(pizza.price)}
            className='card h-100 shadow-sm mb-3'
            addToCart={() => handleAddToCart(pizza)}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
