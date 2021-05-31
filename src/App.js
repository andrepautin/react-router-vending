import './App.css';
import VendingMachine from "./VendingMachine";
import Cookies from "./Cookies";
import Nachos from "./Nachos";
import Celery from "./Celery";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
