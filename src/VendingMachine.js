import { Link } from "react-router-dom";
import "./VendingMachine.css"

/**VendingMachine component
 * 
 * App -> VendingMachine
 */
function VendingMachine() {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-hello">Hello I am Vending Machine!</div>
      <div className="VendingMachine-items">
        <div>
          <Link to="/cookies">Cookies</Link>
        </div>
        <div>
        <Link to="/nachos">Nachos</Link>
        </div>
        <div>
        <Link to="/celery">Celery</Link>
        </div>
      </div>
    </div>
  )
}

export default VendingMachine;