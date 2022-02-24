import 'bootstrap/dist/css/bootstrap.css'
import Button from './button/button'
import CartWidget from './CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = ({product}) => {

   






    return (
        <div>
            <h1>Ecommerce</h1>
        <nav className="bg-dark bg-gradient">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink to={`/detail/celular`}>Celular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/category/desktops'}>Desktops</NavLink>
                </li> 
                <li className="nav-item">
                    <NavLink to={'/category/laptops'}>Laptops</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/category/Tablets'}>Tablets</NavLink>
                </li>
                <li className="nav-item"><a><CartWidget /></a></li>
            </ul>
        </nav>


        </div>
    )
  }

  export default NavBar