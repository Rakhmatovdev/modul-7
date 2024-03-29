import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./Store.jsx"
import Users from "./components/Users.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux"


ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><Users/><App /></Provider>)
