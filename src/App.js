import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore"

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/Browse',
      element: <Browse />
    }
  ])

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;