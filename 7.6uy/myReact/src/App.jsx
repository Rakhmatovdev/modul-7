import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import ErrorPage from "./pages/ErrorPage"
//pages
import Chiqim from "./pages/Chiqim"
import Kirim from "./pages/Kirim"
import Kassa from "./pages/Kassa"
function App() {
  const routes=createBrowserRouter([
    {
       path:"/",
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
  path:"/chiqim",
  element:<Chiqim/>
  },
    {
  path:"/kirim",
  element:<Kirim/>
  },
    {
  path:"/kassa",
  element:<Kassa/>
  },
]

    }
   

  ])
  return (<div className="App"><RouterProvider router={routes}/></div>) 
}
export default App
