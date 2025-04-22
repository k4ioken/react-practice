import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dark, setdark] = useState(false);
  document.body.className = dark? 'darkTheme' : 'lightTheme';
  //document.button.className=dark? 'darkbutton':'lightbutton';
  return (
    <div className='wrapper'>
        <div className={dark?'darkpattern':'lightpattern'}>
        <h1>Theme changer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis consectetur officia labore vitae beatae laborum dolor maiores reiciendis temporibus? Corporis, error explicabo similique quos necessitatibus dolores ducimus ratione magni. Delectus itaque voluptatibus doloremque nihil adipisci deserunt eligendi sunt nisi exercitationem harum provident, natus facilis inventore, ex sequi architecto laborum! Ducimus.</p>
        <button className={dark?'darkbutton':'lightbutton'} onClick={()=>setdark(!dark)}>Switch Theme</button>
        </div>
    </div>
  )
}

export default App
