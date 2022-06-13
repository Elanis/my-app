import './index.css';

import Counter from '../Counter';
import MyComponent from '../MyComponent';

export default function App() {
	return (
		<div className="my-app">
			Test<br />
			<MyComponent name={'world'} /><br/>
			<Counter />
		</div>
	);
}
