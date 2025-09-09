import { createBrowserRouter } from 'react-router-dom';
import DashBoard from './component/Dashboard/DashBoard';
import Home from './component/Home/Home';
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
        }
    ]
  },
]);

export default router;