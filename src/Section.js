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
					<Card text='Koffie is lekker' />
					<Card image='coffee3.jpg' text='Koffie is vies' />
					<Card image='coffee4.jpg' text='Koffie is sappig' />
					<Card image='coffee5.jpg' text='Hoiiii' />
				</div>
			</section>
		</>
	)
}

// Exports
export default Section
