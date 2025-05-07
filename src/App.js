import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./Utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
      {
      path:"/",
      element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
  ]
}])

function App() {
  return (
    <Provider>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
