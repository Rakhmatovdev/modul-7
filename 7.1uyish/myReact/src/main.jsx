import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import rootReducer from "./redux/rootReducer.jsx";
import MyIndex from "./myindex.jsx";


const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <MyIndex/>
  </Provider>
);