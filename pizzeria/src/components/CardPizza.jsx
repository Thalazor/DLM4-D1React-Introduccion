import { toLocalString } from '../utils/toLocalString'

export const CardPizza = ({ name, price, ingredients, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body px-0">
        <h5 className="card-title border-bottom pb-2">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Ingredientes:</h6>
        <p className="card-text mx-2">🍕 {ingredients}</p>
        <p className="card-text border-top pt-2">Precio: {toLocalString(price)}</p>
        <a href="#" className="btn btn-primary mx-2">Ver Más 👀</a>
        <a href="#" className="btn btn-secondary mx-2">Añadir 🛒</a>
      </div>
    </div>
  );
};