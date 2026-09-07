import { useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  )
}

export default App
