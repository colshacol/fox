import { observable, autorun, action } from "mobx";
import fox from "fox";

const state = observable({
	foo: true
});

// No work yet.
const setFoo = action(() => {
	console.log("setting foo");
	state.foo = !state.foo;
});

const App = () => {
	return (
		<div className="App">
			<animated>
				<p>I'm an {"<animated>"} builtIn. I come pre-installed!</p>
			</animated>
			<Foo />
		</div>
	);
};

const Foo = () => {
	return (
		<div className="Foo">
			<p>I AM FOO, HEAR ME ROAR.</p>
		</div>
	);
};

class Wrapper {
	constructor(props, children) {
		this.props = props;
		this.children = children;
		this.render = () => this.render(props, children);
	}

	render(props, children) {
		return children;
	}
}

fox.render(<App />, document.querySelector("#mountPoint"));
