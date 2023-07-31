
import { Link } from "react-router-dom";
import "./Header.css";
import { useAppSelector , useAppDispatch } from "../store/store";
import { signout } from "../store/slices/authSlices";
import { clearToCart } from '../store/slices/cartSlices'
import { useNavigate } from "react-router-dom";

function Header() {

  const cart = useAppSelector((state) => state?.cart);
  const user = useAppSelector((state) => state?.auth);
  const totalQty = cart?.reduce((sum, item) => sum + item.qty, 0) ?? 0;
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // useNavigate

  const onClickSignOut = () => {
    dispatch(signout());
    dispatch(clearToCart());
    navigate("/");
  }
  return (
    <nav>
    <div className="w-full">
      <ul className="nav-wrapper">
        <li>
          <Link to="/">Home</Link>
        </li>
        {user.user && 
          <li>
            <Link to="/cart">
              Cart
              <span className="text-red-700 p-2 bg-cyan-50 rounded-full ml-1">
                {cart ? totalQty : 0}
              </span>
            </Link>
          </li>
        }
        <li>
          {user.user ? (
            <button onClick={() => onClickSignOut()}>Sign Out</button>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;
