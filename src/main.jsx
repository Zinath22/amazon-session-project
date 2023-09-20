import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/mainLayout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import myCreatedRoute from './Route/Route'

// const myCreateRouter = createBrowserRouter([
//   {
// path:"/",
// element: <div>This is my first home router</div>
// },
// {
//   path:"/products",
//   element: <div>This is product page</div>
// },
// {
//   path:"/about",
//   element: <div>This is about page</div>
// }
// ])
// const myCreatedRoute = createBrowserRouter([
//     {
//       path:"/",
//       element : <section>
//         <div>This is a fixed item</div>
//         <Outlet></Outlet>
  
//       </section>,
//   children : [
//           {
//             path: "/",
//             element : <div>This is home route</div>
//           },
//           {
//             path: "/products",
//             element : <div>Products page</div>
//           }
//         ]
//       }
    
    
//     ])

// const myCreatedRoute = createBrowserRouter([
//     {
//       path:"/",
//       element : <MainLayout></MainLayout>,
//      children : [
//         {
//           path: "/",
//           element : <Home></Home>
//         },
//         {
//           path: "/products",
//           element : <Products></Products>
//         }
//       ]
//     }
//   ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
