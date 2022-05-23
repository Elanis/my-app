import './index.css';

import MyComponent from '../MyComponent';

export default function App() {
	return (
		<div className="my-app">
			Test<br />
			<MyComponent name={'world'} />
		</div>
	);
}
