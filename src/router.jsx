import { createBrowserRouter } from 'react-router-dom';
import DashBoard from './component/Dashboard/DashBoard';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Main from './component/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/Dashboard",
            element:<DashBoard></DashBoard>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
    ]
  },
]);

export default router;