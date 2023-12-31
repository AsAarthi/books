import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {BookList, History, WelcomePage} from "./components/Book";


const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
  },
  {
    path: "/history",
    element:<BookList/>
  },
  {
    path: "/science",
    element:<BookList/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
