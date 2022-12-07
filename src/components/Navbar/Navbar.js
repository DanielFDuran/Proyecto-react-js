import { Link } from 'react-router-dom'
import './Navbar.css'
//import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {
    return (
        <header className="header">
        <nav className='navbar'>
            <img src="./image/computer.svg" alt="logocomp" width="30" className="logo"></img>
            <h1 style={{ color: props.colorTitle }} className="title">Visual Comp</h1>
        </nav>
        <Link to='/'>Home</Link>
        <Link to='/category/Perifericos'>Perifericos</Link>
        <Link to='/category/Insumos'>Insumos</Link>
        <CartWidget />
        </header>
    )
}

export default Navbar