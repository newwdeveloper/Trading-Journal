import "./App.css";
import CombinedComponent from "./components/CombinedComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputContainer from "./components/InputContainer";
import NoDisplay from "./components/NoDisplay";
import { Provider } from "react-redux";
import appStore from "./components/appStore";

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
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
