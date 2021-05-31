import { Link } from "react-router-dom";
import { useState } from "react";

/**Cookie component
 * 
 * App -> Cookie
 */
function Cookies() {
  const [cookies, setCookies] = useState([]);

  function addCookie() {
    let left = `${Math.random() * 100}%`;
    let top = `${Math.random() * 100}%`;
    let newCookie = <img 
      key={cookies.length} 
      src="https://media.giphy.com/media/1iXObbKyXYlpe/giphy.gif"
      style={{position: "absolute",
              left: `${left}`,
              top: `${top}`,
              zIndex: -1}}/>
    setCookies(currCookies => [...currCookies, newCookie])
  }


  return (
    <div className="Cookies" style={{position: "relative"}}>
      <div>I'm a Cookie!</div>
      <img src="https://media.giphy.com/media/1iXObbKyXYlpe/giphy.gif"/>
      {cookies}
      <button style={{zIndex: 1, position: "absolute"}}onClick={addCookie}>Nom Nom Nom</button>
        <Link to="/">Go Back To Vending Maching!</Link>
    </div>

  )
}

export default Cookies;