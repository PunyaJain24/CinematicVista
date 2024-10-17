import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore"
import MoviePage from "./components/MoviePage";
import PlayVideo from "./components/PlayVideo";
import Video from "./components/Video";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/Browse',
      element: <Browse />
    },
    {
      path: '/movie/:movieId',
      element: <MoviePage />
    },
    {
      path: '/video/:videoId',
      element: <Video />
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