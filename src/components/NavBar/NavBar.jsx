import "./navBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav>
        <img className="logo" src="./src/assets/img/dinora-logo.png" alt="logo-dinora" />
        <ul className="nav-list">
            <li><a href="http://#">Productos</a></li>
            <li><a href="http://#">Quienes somos?</a></li>
            <li><a href="http://#">Contactanos</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}
