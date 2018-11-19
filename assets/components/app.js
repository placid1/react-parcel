import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "../styles/style.scss"
import Logo from "../img/logo.svg"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			content: 'Welcome to React - Parcel'
		}
	}

	render(){
		return(
			<div className="container">
				<img className="logo" src={Logo} alt=""/>
				<h2>{this.state.content}</h2>			
			</div>
		)
	}
}

export default App;