import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import NavContents from "./components/NavContents";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import Error from "./components/Error";

// Move router configuration outside the App component


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/userform",
        element:<>
        <UserForm/>
        
        </>
      },
      {
        path:'/userdetail',
        element:<UserDetails/>,
      }
    ],
    errorElement:<Error/>
  },
  
]);

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <NavContents />
        <Outlet />
      </div>
    </div>
  );
}

const AppWithRouter = () => (
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);

export default AppWithRouter;
