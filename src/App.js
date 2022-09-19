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
		</>
	)
}

// Exports
export default App
