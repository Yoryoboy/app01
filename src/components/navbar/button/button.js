import 'bootstrap/dist/css/bootstrap.css'

const Button = ({label, backgroundColor, colorText, handleClick}) => {
    return (
        <button type="button" className="btn btn-info mt-2" style={{backgroundColor, color: colorText}} onClick={handleClick}>{label}</button>
    )
}

export default Button