import "./App.css";
import CombinedComponent from "./components/CombinedComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputContainer from "./components/InputContainer";
import NoDisplay from "./components/NoDisplay";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <CombinedComponent />,
      children: [
        {
          index: true,
          element: <NoDisplay />,
        },
        {
          path: "/InputTrade",
          element: <InputContainer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
