// Imports
import "./App.css"
import Navigation from "./Navigation"
import Header from "./Header"
import Card from "./Card"
import "./Section.css"
import Section from "./Section"

// Functions
const App = () => {
	return (
		<>
			<Navigation />
			<Header bigTitle='Coffeez' smallTitle='Coffee that will make you smile' buttonText='order now' />
			<Section title='Het is mooi weer vandaag'>
				<Card text='Koffie is lekker' />
				<Card image='coffee3.jpg' text='Koffie is vies' />
				<Card image='coffee4.jpg' text='Koffie is sappig' />
				<Card image='coffee5.jpg' text='Hoiiii' />
			</Section>
			<Section title='Koekjes zijn lekker'>
				<Card text='Hoi' />
				<Card image='coffee.jpg' text='Koekjes zijn lekker' />
				<Card image='coffee5.jpg' text='Koffie is sappig' />
				<Card image='coffee4.jpg' text='Koekjes zijn lekker' />
			</Section>
		</>
	)
}

// Exports
export default App
