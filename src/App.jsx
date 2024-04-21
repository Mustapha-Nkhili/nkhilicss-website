import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import DocsLayout from "./layouts/DocsLayout";
import Introduction from "./pages/docs/Introduction";

import "./app.css";
import Installation from "./pages/docs/Installation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "docs",
          element: <DocsLayout />,
          children: [
            {
              path: "introduction",
              element: <Introduction />,
            },
            {
              path: "installation",
              element: <Installation />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
