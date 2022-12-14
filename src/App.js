import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import Signup from './component/Signup/Signup';
import Main from './layouts/Main';
import { prodAndCardLoder } from './Loders/ProdAndCardLoder';
import PrivateRoute from './Route/PrivateRoute';



function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children: [
        {
          path:'/',
          loader: () => fetch('products.json') ,
          element: <Shop/>
        },
        {
          path:'orders',
          loader: prodAndCardLoder,
          element: <Orders/>
        },
        {
          path:'inventory',
          element: <PrivateRoute><Inventory/></PrivateRoute>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping/></PrivateRoute>
        },
        {
          path:'about',
          element: <About/>
        },
        {
          path:'login',
          element: <Login/>
        },
          {
            path:'signup',
            element:<Signup/>
          }
      ]
    }
  ])
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
