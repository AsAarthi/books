import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {BookList, Science ,History,WelcomePage} from "./components/Book";


const router = createBrowserRouter([
  {
    path: "",
    element: <WelcomePage />,
  },
  {
    path: "/history",
    element:<History/>
  },
  {
    path: "/science",
    element:<Science/>
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
