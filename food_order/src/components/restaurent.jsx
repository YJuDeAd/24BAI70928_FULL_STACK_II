import FoodMenu from './foodMenu'

function Restaurant({ user, onAddToCart }) {
	return (
		<section>
			<FoodMenu user={user} onAddToCart={onAddToCart} />
		</section>
	)
}

export default Restaurant
