import PropTypes from 'prop-types'
const CardPizza = ({ img, ingredients, name, price }) => {
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
        <div className='card-footer d-grid'>
          <button className='btn btn-dark'>Comprar</button>
        </div>
      </div>
    </main>
  )
}

CardPizza.propTypes = {
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
export default CardPizza
