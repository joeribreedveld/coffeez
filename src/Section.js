// Imports
import "./Section.css"
import Card from "./Card"

// Functions
const Section = (props) => {
	return (
		<>
			<section className='section'>
				<header className='section__header'>
					<i class='fa-solid fa-mug-saucer'></i>
					<h2 className='section__h2'>{props.title || "default title"}</h2>
				</header>
				<div className='section__wrapper'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</>
	)
}

// Exports
export default Section
