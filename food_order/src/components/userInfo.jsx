import { useUser } from './userContext'

function UserInfo({ user: propUser }) {
	const contextUser = useUser()
	const user = contextUser || propUser

	return (
		<section>
			<h2>Customer Details</h2>
			<p>Name: {user?.name}</p>
			<p>Email: {user?.email}</p>
			<p>Location: {user?.location}</p>
		</section>
	)
}

export default UserInfo
