import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { CartWidget } from './components/CartWidget/CartWidget'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="👋 Te damos la bienvenida al E-Shop de Dinora SAS 👋" />
    </>
  )
}

export default App
