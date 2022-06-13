import './index.css';

import Counter from '../Counter';
import MyComponent from '../MyComponent';
import TodoList from '../TodoList';
import UserList from '../UserList';

export default function App() {
	return (
		<div className="my-app">
			Test<br />
			<MyComponent name={'world'} /><br/>
			<Counter />
			<TodoList />
			<UserList />
		</div>
	);
}
