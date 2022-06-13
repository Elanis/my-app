import './index.css';

import Counter from '../Counter';
import MyComponent from '../MyComponent';
import TodoList from '../TodoList';

export default function App() {
	return (
		<div className="my-app">
			Test<br />
			<MyComponent name={'world'} /><br/>
			<Counter />
			<TodoList />
		</div>
	);
}
