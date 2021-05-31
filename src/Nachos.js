import { Link } from "react-router-dom";

/**Nachos component
 * 
 * App -> Nachos
 */
function Nachos() {
  return (
    <div>
    <div>I'm Nachos!</div>
    <img src="https://media.giphy.com/media/8c10Ncg1XQKh7l9FID/giphy.gif"/>
    <Link to="/">Go Back To Vending Maching!</Link>
    </div>
  )
}

export default Nachos;
