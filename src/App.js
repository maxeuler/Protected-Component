import React, { Component } from 'react';
import './App.css';
import IsLoggedIn from './components/IsLoggedIn';
import Protected from './components/Protected';

class App extends Component {
	state = {
		isLoggedIn: false
	};

	toggleAuth = e => {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn
		}));
	};
	render() {
		return (
			<div className="App">
				<button onClick={this.toggleAuth}>
					{this.state.isLoggedIn ? 'Sign Out' : 'Sign In'}
				</button>
				<IsLoggedIn isLoggedIn={this.state.isLoggedIn}>
					<Protected />
				</IsLoggedIn>
			</div>
		);
	}
}

export default App;
