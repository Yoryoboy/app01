import 'bootstrap/dist/css/bootstrap.css'
import Button from './button/button'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
                return {id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    }, [])

   
    
        return (



            <div>
                <Link to={'/'}>
                <h1>Ecommerce</h1>
                </Link>
            <nav className="bg-dark bg-gradient">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
                    </li>
                    
                    <li className="nav-item">
                        <a>
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        )
      }

  export default NavBar