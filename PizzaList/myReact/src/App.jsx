import './App.css'
import PizzaForm from './components/PizzaForm'
import PizzaList from './components/PizzaList'
function App() {
  return (
    <div className='container'>
<h1 className=''>Pizza Buyurtma qilish</h1>

<PizzaForm/>
<PizzaList/>
    </div>
  )
}
export default App
