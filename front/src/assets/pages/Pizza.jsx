import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [onePizza, setOnePizza] = useState([])
  const url = 'http://localhost:5000/api/pizzas/p001'
  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(onePizza.price)

  const getOnePizza = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setOnePizza(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getOnePizza()
  }, [])
  return (
    <main className='container my-3 mb-3'>
      <div className='row row-cols-2 g-2 d-flex flex-column align-items-center'>
        <div className='card h-100 shadow-sm'>
          <img className='card-body' src={onePizza.img} alt={onePizza.name} />
          <h1 className='card-title mx-auto'>{onePizza.name}</h1>
          <p className='card-body'>{onePizza.desc}</p>
          <p className='card-body fs-5'>{onePizza.ingredients}</p>
          <p className='card-body fs-3'>{formattedPrice}</p>
          <div className='card-footer text-end'>
            <button className='footer btn btn-success my-2 mx-2'>Comprar</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza
