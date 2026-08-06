import UserInfo from './userInfo'

const foodItems = [
	{ name: 'Pizza', price: 299 },
	{ name: 'Burger', price: 149 },
	{ name: 'Pasta', price: 199 },
]

function FoodMenu({ user, onAddToCart }) {
	return (
		<section>
			<h2>FOOD MENU</h2>
			{foodItems.map((item) => (
				<div key={item.name}>
					<p>
						{item.name} - ₹{item.price}
					</p>
					<button type="button" onClick={onAddToCart}>
						Add to Cart
					</button>
				</div>
			))}

			<UserInfo user={user} />
		</section>
	)
}

export default FoodMenu
