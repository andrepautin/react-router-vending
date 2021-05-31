import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** NavBar component
 * 
 * App -> NavBar
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
      <NavLink exact to="/nachos">
        Nachos
      </NavLink>
      <NavLink exact to="/celery">
        Celery
      </NavLink>
    </nav>
  )
}

export default NavBar;