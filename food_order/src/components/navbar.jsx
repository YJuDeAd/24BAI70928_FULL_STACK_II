function Navbar({ user, cartCount }) {
	return (
		<header>
			<p>Welcome, {user?.name}</p>
			<p>Cart: {cartCount} items</p>
		</header>
	)
}

export default Navbar
