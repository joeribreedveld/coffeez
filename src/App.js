// Imports
import "./App.css"
import Navigation from "./Navigation"
import Header from "./Header"
import Section from "./Section"

// Functions
const App = () => {
	return (
		<>
			<Navigation />
			<Header bigTitle='Coffeez' smallTitle='Coffee that will make you smile' buttonText='order now' />
			<Section title='Koffie is lekker' />
			<Section title='Koffie is vies' />
			<Section title='Het is mooi weer vandaag' />
		</>
	)
}

// Exports
export default App
