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
			<Section title='Titel van de section' />
		</>
	)
}

// Exports
export default App
