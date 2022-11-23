import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {
    return (
        <header className="header">
        <nav className='navbar'>
            <img src="./image/computer.svg" alt="logocomp" width="30" className="logo"></img>
            <h1 style={{ color: props.colorTitle }} className="title">Visual Comp</h1>
        </nav>
        <Button colorText ='blue'className="btn">Inicio</Button>
        <Button colorText ='green'className="btn">Perifericos</Button>
        <Button colorText ='red'className="btn">Contacto</Button>
        
        <CartWidget />
        </header>
    )
}

export default Navbar