import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardPizza = ({ id, img, ingredients, name, price, addToCart }) => {
  const navigate = useNavigate()

  const handleBuyNow = () => {
    addToCart()
    navigate('/cart')
  }
  const seeMore = () => {
    navigate(`/pizza/${id}`)
  }
  return (
    <main className='col-md-4'>
      <div className='card shadow-sm mb-3'>
        <img src={img} alt={name} />
        <div className='card-body'>
          <h3 className='card-title'>{name.toUpperCase()}</h3>
          <p className='card-text'>Precio: {price}</p>
          <ul className='list-unstyled'>
            {ingredients.map((ingredient) => (
              <li className='card-text' key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='card-footer d-flex justify-content-around'>
          <Button variant='dark' onClick={handleBuyNow}>Comprar</Button>
          <Button variant='success' onClick={addToCart}>
            Agregar al carrito
          </Button>
          <Button variant='success' onClick={seeMore}>Ver más</Button>
        </div>
      </div>
    </main>
  )
}

CardPizza.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
}
export default CardPizza
