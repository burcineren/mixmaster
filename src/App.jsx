import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Cocktail,
  Newsletter,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "cocktail", element: <Cocktail /> },
      { path: "newsletter", element: <Newsletter /> },
      {
        path: "about",
        element: <About />,
        children: [
          { index: true, element: <h1>Company</h1> },
          { path: "person", element: <h1>Person</h1> },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
