import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import DocsLayout from "./layouts/DocsLayout";
import Introduction from "./pages/docs/getting-started/Introduction";
import Installation from "./pages/docs/getting-started/Installation";
import AspectRatio from "./pages/docs/layout/AspectRatio";
import BoxSizing from "./pages/docs/layout/BoxSizing";
import Display from "./pages/docs/layout/Display";
import Float from "./pages/docs/layout/Float";
import ObjectFit from "./pages/docs/layout/ObjectFit";
import Overflow from "./pages/docs/layout/Overflow";
import Position from "./pages/docs/layout/Position";
import TopBottomLeftRight from "./pages/docs/layout/TopBottomLeftRight";
import Visibility from "./pages/docs/layout/Visibility";
import Zindex from "./pages/docs/layout/Zindex";
import FlexBasis from "./pages/docs/Flexbox & Grid/FlexBasis";
import FlexDirection from "./pages/docs/Flexbox & Grid/FlexDirection";
import FlexWrap from "./pages/docs/Flexbox & Grid/FlexWrap";
import Flex from "./pages/docs/Flexbox & Grid/Flex";
import FlexGrow from "./pages/docs/Flexbox & Grid/FlexGrow";
import FlexShrink from "./pages/docs/Flexbox & Grid/FlexShrink";
import Order from "./pages/docs/Flexbox & Grid/Order";
import Gap from "./pages/docs/Flexbox & Grid/Gap";
import JustifyContent from "./pages/docs/Flexbox & Grid/JustifyContent";
import JustifyItems from "./pages/docs/Flexbox & Grid/JustifyItems";
import JustifySelf from "./pages/docs/Flexbox & Grid/JustifySelf";
import AlignContent from "./pages/docs/Flexbox & Grid/AlignContent";
import AlignItems from "./pages/docs/Flexbox & Grid/AlignItems";
import AlignSelf from "./pages/docs/Flexbox & Grid/AlignSelf";
import PlaceContent from "./pages/docs/Flexbox & Grid/PlaceContent";
import PlaceItems from "./pages/docs/Flexbox & Grid/PlaceItems";
import PlaceSelf from "./pages/docs/Flexbox & Grid/PlaceSelf";

import "./app.css";

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
            {
              path: "aspect-ratio",
              element: <AspectRatio />,
            },
            {
              path: "box-sizing",
              element: <BoxSizing />,
            },
            {
              path: "display",
              element: <Display />,
            },
            {
              path: "float",
              element: <Float />,
            },
            {
              path: "object-fit",
              element: <ObjectFit />,
            },
            {
              path: "overflow",
              element: <Overflow />,
            },
            {
              path: "position",
              element: <Position />,
            },
            {
              path: "top-bottom-left-right",
              element: <TopBottomLeftRight />,
            },
            {
              path: "visibility",
              element: <Visibility />,
            },
            {
              path: "z-index",
              element: <Zindex />,
            },
            {
              path: "flex-basis",
              element: <FlexBasis />,
            },
            {
              path: "flex-direction",
              element: <FlexDirection />,
            },
            {
              path: "flex-wrap",
              element: <FlexWrap />,
            },
            {
              path: "flex",
              element: <Flex />,
            },
            {
              path: "flex-grow",
              element: <FlexGrow />,
            },
            {
              path: "flex-shrink",
              element: <FlexShrink />,
            },
            {
              path: "order",
              element: <Order />,
            },
            {
              path: "gap",
              element: <Gap />,
            },
            {
              path: "justify-content",
              element: <JustifyContent />,
            },
            {
              path: "justify-items",
              element: <JustifyItems />,
            },
            {
              path: "justify-self",
              element: <JustifySelf />,
            },
            {
              path: "align-content",
              element: <AlignContent />,
            },
            {
              path: "align-items",
              element: <AlignItems />,
            },
            {
              path: "align-self",
              element: <AlignSelf />,
            },
            {
              path: "place-content",
              element: <PlaceContent />,
            },
            {
              path: "place-items",
              element: <PlaceItems />,
            },
            {
              path: "place-self",
              element: <PlaceSelf />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
