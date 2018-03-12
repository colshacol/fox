import fox from "fox";

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
			<Bar gooboo={[0, 'g', 0]}>
				<i>italic?</i>
			</Bar>
		</div>
	);
};

class Bar extends fox.Wrapper {
	render({ props, children, state }) {
		return (
			<div className="Bar">
				<p>I AM bar hear me bark?</p>
			</div>
		)
	}
}

fox.render(<App />, document.querySelector("#mountPoint"));
