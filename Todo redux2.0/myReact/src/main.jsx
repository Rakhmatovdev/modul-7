import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Store from './todo/Store.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={Store}><App /></Provider>)
