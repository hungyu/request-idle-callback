import React, { Component } from 'react';

export default class WithoutRequestIdleCallback extends Component {
	constructor(props) {
		super(props);

		this.doExpensive = this.doExpensive.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.expensiveCal = this.expensiveCal.bind(this);

		this.state = {
			background: 'purple',
			value: 0
		}
		this.iter = 40000;
	}

	expensiveCal(){
		while (this.iter > 0) {
	  	var value = Math.random() < 0.5? this.iter + Math.random() : this.iter - Math.random();
	    this.iter -= 1;
	    console.log(this.iter)
	  }
	}

	doExpensive() {
		this.expensiveCal();
	}

	changeColor() {
		this.setState({ background: 'red' })
	}

	render() {
		return (
			<div>
				<div>Without request idle callback</div>
				<div ref="playground" style={{
					background: this.state.background,
					height: '100px',
					width: '100%'
				}}/>
				<button onClick={this.doExpensive}>
					start expensive task
				</button>
				<button onClick={this.changeColor}>
					change color
				</button>
			</div>
		);
	}
}
