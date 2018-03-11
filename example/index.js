import { observable, autorun, action } from 'mobx'
import fox  from 'fox'

const state = observable({
	foo: true
})

// No work yet.
const setFoo = action(() => {
	console.log('setting foo')
	state.foo = !state.foo;
})

const App = () => {
	console.warn(0);

	return (
		<div className="App">
			<button onClick={setFoo}>setState</button>
			<p>hello</p>
			<div>
				<timmy isCool src="https://pbs.twimg.com/profile_images/931971635288174593/DjhdoFLE_bigger.jpg" />
				<Foo name="timmy" />
			</div>
		</div>
	)
}

const Foo = () => {
	console.warn(1);

	return (
		<div className="App">
			<p big-dogs="henry">in foo</p>
			<p>{state.foo ? 'FOO IS TRUE' : 'foo_is_false'}</p>
			{false}
			<div>
				<strong>goodbye</strong>
				<input placeholder="sup dawg" value="" />
			</div>
		</div>
	)
}

autorun(Foo)

fox.render(<App />, document.querySelector('#mountPoint'))