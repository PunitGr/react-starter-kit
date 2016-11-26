import React, { Component } from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends Component {
	render() {
		return (
			<h1>React Starter Kit with hot-reload</h1>
		);
	}
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));