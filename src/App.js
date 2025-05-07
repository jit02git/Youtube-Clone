import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./Utils/store";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>
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
