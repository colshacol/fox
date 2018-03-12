import fox from "fox";

const state = {
	name: 'Tommy'
}

const setName = () => {
	state.name = state.name.split('').reverse().join('');
	console.log(state.name)
}

const App = (props, children) => {
	return (
		<section className="App">
			<a href="google.com">Google</a>
			<p>I am awesome.</p>
			<strong id="strong">And really cool.</strong>
			<button onClick={setName}>reverse name</button>
		</section>
	);
};


const mountPoint = document.querySelector("#mountPoint");
fox.render(App, mountPoint);
