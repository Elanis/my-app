export default async function createUser(user) {
	await fetch(
		'https://localhost:7004/Users/add',
		{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(user)
		}
	)
}
