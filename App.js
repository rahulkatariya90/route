import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteMain from './Pages/Website/Main'
import Home from './Pages/Website/Home'
import Store from './Pages/Website/Store'
import Cart from './Pages/Website/Cart'
import Ipad from './Pages/Website/Ipad';
import Iphone from './Pages/Website/Iphone';
import Macbook from './Pages/Website/Macbook';
import Access from './Pages/Website/Access';


function App() {
  const routes= createBrowserRouter(
    [
      {
        path: '/',
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "store",
            element: <Store />
          },
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "iphone",
            element: <Iphone />
          },
          {
            path: "ipad",
            element: <Ipad />
          },
          {
                                         path: "macbook",
            element: <Macbook />
          },
          {
            path: "accesories",
            element: <Access />
          }
        ],
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
