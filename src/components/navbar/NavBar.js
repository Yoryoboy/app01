import './NavBar.css'
import Button from './button/button'
import CartWidget from './CartWidget/CartWidget'

const NavBar = ({title}) => {

    const handleCelular = () => {
        console.log('Celular')
    }

    const handleDesktops = () => {
        console.log('Desktops')
    }

    const handleLaptops = () => {
        console.log('Laptops')
    }

    const handleTablets = () => {
        console.log('Tablets')
    }

    const handleContactanos = () => {
        console.log('Contactanos')
    }






    return (
        <div>
            <h1>{title}</h1>
        <nav>
            <ul>
                <li><a><Button label='Celulares' handleClick={handleCelular} /></a></li>
                <li><a><Button label='Desktops' handleClick={handleDesktops} /></a></li> 
                <li><a><Button label='Laptops' handleClick={handleLaptops}/></a></li>
                <li><a><Button label='Tablets' handleClick={handleTablets} /></a></li>
                <li><a><Button label='Contáctanos' handleClick={handleContactanos}/> </a></li>
                <li><a><CartWidget /></a></li>
            </ul>
        </nav>


        </div>
    )
  }

  export default NavBar