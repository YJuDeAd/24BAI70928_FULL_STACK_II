import Restaurant from './restaurent'

function Home({ user, onAddToCart }) {
	return (
		<section>
			<Restaurant user={user} onAddToCart={onAddToCart} />
		</section>
	)
}

export default Home
