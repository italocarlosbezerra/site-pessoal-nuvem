import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
   return (
      <nav>
         <ul>
            <li className="button">
               <Link to="/">CURRICULUM</Link>
            </li>
            <li className="button">
               <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="button">
               <Link to="/contato">CONTACT</Link>
            </li>
         </ul>
      </nav>
   );
}
