import { toLocalString } from "../utils/toLocalString";

export const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand mr-4' href='#'>
          Pizzería Mamma Mía!
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='d-flex justify-content-between collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link border border-1 rounded mx-1' href='#'>🍕Home</a>
            </li>
            {token ? (
              <>
                <li className='nav-item'>
                  <a className='nav-link border border-1 rounded mx-1' href='#'>😎Profile</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link border border-1 rounded mx-1' href='#'>🔓Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <a className='nav-link border border-1 rounded mx-1' href='#'>🔐Login</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link border border-1 rounded mx-1' href='#'>🔐Register</a>
                </li>
              </>
            )}
          </ul>
          <button className='btn btn-outline-primary'>
            🛒Total: {toLocalString(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};
