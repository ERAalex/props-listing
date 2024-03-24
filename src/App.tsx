
import './App.css'
import Listing from './components/Listing/Listing'
import json from './components/data/etsy.json'

function App() {

  return (
    <>
      <Listing data={json}/>
    </>
  )
}

export default App
