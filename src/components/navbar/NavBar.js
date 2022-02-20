import 'bootstrap/dist/css/bootstrap.css'
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
        <nav className="bg-dark bg-gradient">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item"><a><Button label='Celulares' handleClick={handleCelular} /></a></li>
                <li className="nav-item"><a><Button label='Desktops' handleClick={handleDesktops} /></a></li> 
                <li className="nav-item"><a><Button label='Laptops' handleClick={handleLaptops}/></a></li>
                <li className="nav-item"><a><Button label='Tablets' handleClick={handleTablets} /></a></li>
                <li className="nav-item"><a><Button label='Contáctanos' handleClick={handleContactanos}/> </a></li>
                <li className="nav-item"><a><CartWidget /></a></li>
            </ul>
        </nav>


        </div>
    )
  }

  export default NavBar