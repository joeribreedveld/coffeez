// Imports
import "./Card.css"

// Functions
const Card = (props) => {
	let cardImage = <img src={"/img/" + props.image} alt='Koffie foto' />
	if (props.image === undefined) {
		cardImage = <img src={"/img/coffee2.jpg"} />
	}

	return (
		<>
			<article className='card'>
				<figure className='card__figure'>{cardImage}</figure>
				<section className='card__section'>
					<p>{props.text || "default card text"}</p>
				</section>
			</article>
		</>
	)
}

// Exports
export default Card
