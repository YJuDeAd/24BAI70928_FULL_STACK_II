import { useState, useEffect } from 'react'
import { UserContext } from './components/userContext'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'

function App() {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh"
  };

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    console.log(`Cart updated. Total items: ${cartCount}`)
  }, [cartCount])

  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1)
  }

  return (
    <UserContext.Provider value={user}>
      <Navbar user={user} cartCount={cartCount} />
      <Home user={user} onAddToCart={handleAddToCart} />
    </UserContext.Provider>
  )
}

export default App
