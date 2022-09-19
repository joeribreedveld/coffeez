// Imports
import "./Header.css"

// Functions
const Header = (props) => {
	return (
		<>
			<header className='header'>
				<h1 className='header__h1'>{props.bigTitle || "default big title"}</h1>
				<h2 className='header__h2'>{props.smallTitle || "default small title"}</h2>
				<button className='header__button'>{props.buttonText || "default"}</button>
			</header>
		</>
	)
}

// Exports
export default Header
