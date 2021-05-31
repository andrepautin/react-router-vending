import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <div>Hello I am Vending Machine!</div>
      <div>
        <Link to="/cookies">Cookies</Link>
        <Link to="/nachos">Nachos</Link>
        <Link to="/celery">Celery</Link>
      </div>
    </div>
  )
}

export default VendingMachine;