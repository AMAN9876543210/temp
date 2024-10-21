import Forest from "./3DForest";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import DateTimePicker from "./Components/Timetravel";
import LoginMachine from "./login/Login";
import Register from "./Register/Register";
import NavigationPage from "./Navigation/NavigationPage";
import SaveForest from "./SaveForest/SaveForest";

const router = createBrowserRouter(
  [
    {
      path:"/3D",
      element:<Forest/>
    }
    ,
    {
      path:"/",
      element:<LoginMachine/>
    },
    {
      path:"/timeTravel",
      element:<DateTimePicker/>
    }
    ,
    {
      path:"/Register",
      element:<Register/>
    }
    ,
    {
      path:"/NavigationPage",
      element:<NavigationPage/>
    }
    ,
    {
      path:"/SaveForest",
      element:<SaveForest/>
    }
  ]
);

function App(){
    return (
      <RouterProvider router={router}/>
    )
}

export default App;