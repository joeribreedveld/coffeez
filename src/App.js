// Imports
import "./App.css"
import Navigation from "./Navigation"
import Header from "./Header"

// Functions
const App = () => {
	return (
		<>
			<Navigation />
			<Header bigTitle='Coffeez' smallTitle='Coffee that will make you smile' buttonText='order now' />
		</>
	)
}

// Exports
export default App
