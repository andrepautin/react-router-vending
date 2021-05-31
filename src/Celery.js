import { Link } from "react-router-dom";

/**Celery component
 * 
 * App -> Celery
 */
function Celery() {
  return (
    <div>
    <div>I'm Celery!</div>
    <img src="https://media.giphy.com/media/U52AeWufAdnwAMcvct/giphy.gif"/>
    <Link to="/">Go Back To Vending Maching!</Link>
    </div>
  )
}

export default Celery;
