import './Button.css'

const Button = (props) => {
    return <button style={{ color : props.colorText }} className="btn">{props.children}</button>
}

export default Button