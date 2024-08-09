import { toLocalString } from '../utils/toLocalString'

export const CardPizza = ({ name, price, ingredients, image }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Ingredientes:</h6>
        <p className="card-text">🍕 {ingredients}</p>
        <p className="card-text">Precio: {toLocalString(price)}</p>
        <a href="#" className="btn btn-primary">Ver Más 👀</a>
        <a href="#" className="btn btn-secondary">Añadir 🛒</a>
      </div>
    </div>
  )
}