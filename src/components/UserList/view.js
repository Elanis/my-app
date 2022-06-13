export default function UserList({ useUserList }) {
	const {
		userList,
		isLoading,
		error
	} = useUserList();

	if(isLoading) {
		return (<span>Loading ...</span>);
	}

	if(error !== null) {
		return (<span>Error: {error}</span>);
	}

	return (
		<ul>
			{userList.map((user) => <li>{user.name}</li>)}
		</ul>
	);
}