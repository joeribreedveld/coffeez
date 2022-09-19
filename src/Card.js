// Imports
import "./Card.css"

// Functions
const Card = () => {
	return (
		<>
			<article className='card'>
				<figure className='card__figure'>
					<img src='/img/coffee2.jpg' alt='Een lepel, hartje en koffie' />
				</figure>
				<section className='card__section'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus iusto harum tempora voluptate quos optio, dolore qui numquam unde dicta odit vitae quasi dolores,
						nobis enim ipsum dolorem vel?
					</p>
				</section>
			</article>
		</>
	)
}

// Exports
export default Card
