import "./logger"
import fox from "fox";


const state = {
	name: 'Tommy'
}

const setName = () => {
	state.name = state.name.split('').reverse().join('');
	console.log(state.name)
}

const App = ({ props, children }) => {
	return (
		<section className="App">
			<a href="google.com">Google</a>
			<p>I am awesome.</p>
			<strong id="strong">And really cool.</strong>
			<button onClick={setName}>reverse name</button>
			<div className="row">
				<nav>
					<ul>
						<li>first</li>
						<li>second</li>
						<li>
							<i>third</i>
							<section>
								<a href="facebook.com">
									how do you do?
								</a>
							</section>
						</li>
					</ul>
				</nav>
			</div>
			<Bar fuck />
		</section>
	);
};

const Bar = ({ props, children }) => {
	return (
		<nav>
			<ul>
				<li>aaaa</li>
				<li>bbbb</li>
				<li>
					<i>cccc</i>
					<section>
						<a href="youtube.com">
							go to youtube
						</a>
					</section>
				</li>
			</ul>
		</nav>
	)
}

const mountPoint = document.querySelector("#mountPoint");
fox.mount(<App dog={true} />, mountPoint);
