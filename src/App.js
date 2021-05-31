import './App.css';
import VendingMachine from "./VendingMachine";
import Cookies from "./Cookies";
import Nachos from "./Nachos";
import Celery from "./Celery";
import NavBar from "./NavBar";
import {BrowserRouter, Route} from "react-router-dom";


/** App component
 * 
 * App -> VendingMachine 
 *     -> Cookies
 *     -> Nachos
 *     -> Celery
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/cookies">
          <Cookies/>
        </Route>
        <Route exact path="/nachos">
          <Nachos/>
        </Route>
        <Route exact path="/celery">
          <Celery/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
