
import './App.css'
import AppLayout from './AppLayout'
import { DEFAULT_FILMS } from './assets/data/films'

function App() {

  return (
    <>
    <AppLayout films={DEFAULT_FILMS}/>     
    </>
  )
}

export default App
