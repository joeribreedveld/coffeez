// Imports
import "./Section.css"

// Functions
const Section = (props) => {
	return (
		<>
			<section className='section'>
				<header className='section__header'>
					<i class='fa-solid fa-mug-saucer'></i>
					<h2 className='section__h2'>{props.title || "default title"}</h2>
				</header>
				<div className='section__wrapper'>{props.children}</div>
			</section>
		</>
	)
}

// Exports
export default Section
