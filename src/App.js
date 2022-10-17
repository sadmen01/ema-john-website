import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import Main from './layouts/Main';
import { prodAndCardLoder } from './Loders/ProdAndCardLoder';



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
          element: <Inventory/>
        },
        {
          path:'about',
          element: <About/>
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
