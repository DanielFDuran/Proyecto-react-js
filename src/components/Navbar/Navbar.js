import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {
    return (
        
        <nav className='navbar'>
            <h1 style={{ color: props.colorTitle }}>Visual Comp</h1>
            <Button colorText ='blue'>Inicio</Button>
            <Button colorText ='green'>Perifericos</Button>
            <Button colorText ='red'>Contacto</Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar