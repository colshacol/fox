export const Wrapper = (tag, props, children) => {
	const render = () => this.render({ props, children, state: this.state })
}
	constructor(props, children) {
		this.props = props;
		this.children = children;
		this.state = { stateful: true }
		this.render = () => this.render({ props, children, state: this.state })
	}
}

class Bar extends Wrapper {
	render({ state, props, children }) {
		return (
			<div className="Bar">
				<p>I AM bar hear me bark?</p>
			</div>
		)
	}
}