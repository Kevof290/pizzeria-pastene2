import React, { useEffect, useState } from 'react'
import CardPizza from './CardPizza'
import { formatNumber } from '../utils/format'
import '../components/Home.css'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
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

  return (
    <main className='container my-3'>
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
          />
        ))}
      </div>
    </main>
  )
}

export default Home
