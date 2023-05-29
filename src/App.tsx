import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)

  return (
      <Home />
  );
}

export default App
