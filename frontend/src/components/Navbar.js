import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <i className="fas fa-tag fa-lg logo"></i>
          <h2>MERN Store</h2>
        </Link>

        <ul className="navbar__links">
          <li>
            <Link to="/" className="shop__link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart
                <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
        </ul>

        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
