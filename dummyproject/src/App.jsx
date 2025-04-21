import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
function App() {
  const [count, setCount] = useState(0);
  return(
   <>
    <h1>{count}</h1>
    <Counter count={count} setCount={setCount} />
   </>
  );
}

export default App
