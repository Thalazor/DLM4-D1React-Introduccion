export const Header = () => {
    return (
      <header className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-dark bg-opacity-50 py-5">
          <h1 className="display-4">¡Pizzería Mamma Mía!</h1>
          <p className="lead">¡Tenemos las mejoress pizzas que podrás encontrar!</p>
          <hr className="my-4" />
        </div>
      </header>
    )
  }
  