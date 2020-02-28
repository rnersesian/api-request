import React, { Component } from 'react';
import './App.css';
import axios from "axios"


class App extends Component {

	state = {
		parameters:"",
		link: "",
		logged: "none",
		method: "get",
		result: ""
	}

	parseQuery = () => {
		let truc = this.state.parameters.split(",")
		let params = {}
		for (let i = 0; i < truc.length; i++) {
			params[truc[i].split(":")[0]] = truc[i].split(":")[1]
		}

		return params
	}

	runQuery = () => {
		console.log(this.parseQuery())

		switch(this.state.method) {
			case "get":
				axios.get(this.state.link)
					.then(res => {
						console.log(res.toString())
						this.setState({result: JSON.stringify(res.data)})
					})
			default:
				this.setState({result: ""})
		}
	}


	render = () => {

		console.log(this.state)

		return (
			<div className="App">
				<div className="container">
					
					<div className="row" style={{justifyContent: "center"}}>
						<input
							type="text"
							placeholder="link"
							className="form-text col-sm-6"
							value={this.state.link || ""}
							onChange={(event) => this.setState({link: event.target.value})}
							/>


					</div>


					<div className="row" style={{justifyContent: "center"}}>
						<input
							type="text"
							placeholder="parameters"
							className="form-text col-sm-6"
							value={this.state.parameters || ""}
							onChange={(event) => this.setState({parameters: event.target.value})}
							/>
					</div>

					<div className="row" style={{justifyContent: "center"}}>
						<select
						className="custom-select col-sm-2"
						onChange={(event) => this.setState({method: event.target.value})}>
							<option value="get">GET</option>
							<option value="post">POST</option>
							<option value="put">PUT</option>
							<option value="delete">DELETE</option>
						</select>

						<button onClick={this.runQuery} className="btn btn-primary">Run Query</button>
					</div>

					<div className="row" style={{width: "100%", marginTop: "50px"}}>
						<textarea value={this.state.result} className="col-sm-12" rows="10"></textarea>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
