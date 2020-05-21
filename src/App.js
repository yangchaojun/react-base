import React, { Fragment } from "react"
import Header from "./common/header"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"

function App() {
	return (
		<Provider store={store}>
			<Fragment>
				<Router>
					<Fragment>
						<Header />
						<Route path="/" exact component={Home}></Route>
						<Route path="/detail" exact component={Detail}></Route>
					</Fragment>
				</Router>
			</Fragment>
		</Provider>
	)
}

export default App
