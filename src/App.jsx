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
import Padding from "./pages/docs/spacing/Padding";
import Margin from "./pages/docs/spacing/Margin";
import Width from "./pages/docs/sizing/Width";
import MinWidth from "./pages/docs/sizing/MinWidth";
import MaxWidth from "./pages/docs/sizing/MaxWidth";
import Height from "./pages/docs/sizing/Height";
import MinHeight from "./pages/docs/sizing/MinHeight";
import MaxHeight from "./pages/docs/sizing/MaxHeight";
import FontFamily from "./pages/docs/typography/FontFamily";
import FontSize from "./pages/docs/typography/FontSize";
import FontStyle from "./pages/docs/typography/FontStyle";
import FontWeight from "./pages/docs/typography/FontWeight";
import LetterSpacing from "./pages/docs/typography/LetterSpacing";
import LineHeight from "./pages/docs/typography/LineHeight";
import ListStylePosition from "./pages/docs/typography/ListStylePosition";
import ListStyleType from "./pages/docs/typography/ListStyleType";
import TextAlign from "./pages/docs/typography/TextAlign";
import TextColor from "./pages/docs/typography/TextColor";
import TextDecorationLine from "./pages/docs/typography/TextDecorationLine";
import TextDecorationColor from "./pages/docs/typography/TextDecorationColor";
import TextDecorationStyle from "./pages/docs/typography/TextDecorationStyle";
import TextDecorationThickness from "./pages/docs/typography/TextDecorationThickness";
import TextUnderlineOffset from "./pages/docs/typography/TextUnderlineOffset";
import TextTransform from "./pages/docs/typography/TextTransform";
import TextOverflow from "./pages/docs/typography/TextOverflow";
import TextWrap from "./pages/docs/typography/TextWrap";
import TextIndent from "./pages/docs/typography/TextIndent";
import WhiteSpace from "./pages/docs/typography/WhiteSpace";
import Hyphens from "./pages/docs/typography/Hyphens";
import BackgroundAttachment from "./pages/docs/backgrounds/BackgroundAttachment";
import BackgroundClip from "./pages/docs/backgrounds/BackgroundClip";
import BackgroundColor from "./pages/docs/backgrounds/BackgroundColor";
import BackgroundOrigin from "./pages/docs/backgrounds/BackgroundOrigin";
import BackgroundPosition from "./pages/docs/backgrounds/BackgroundPosition";
import BackgroundRepeat from "./pages/docs/backgrounds/BackgroundRepeat";
import BackgroundSize from "./pages/docs/backgrounds/BackgroundSize";
import BorderRadius from "./pages/docs/borders/BorderRadius";
import BorderWidth from "./pages/docs/borders/BorderWidth";
import BorderColor from "./pages/docs/borders/BorderColor";
import BorderStyle from "./pages/docs/borders/BorderStyle";
import BorderCollapse from "./pages/docs/borders/BorderCollapse";
import OutlineWidth from "./pages/docs/borders/OutlineWidth";
import OutlineColor from "./pages/docs/borders/OutlineColor";
import OutlineStyle from "./pages/docs/borders/OutlineStyle";
import OutlineOffset from "./pages/docs/borders/OutlineOffset";
import Blur from "./pages/docs/filters/Blur";
import Brightness from "./pages/docs/filters/Brightness";
import Contrast from "./pages/docs/filters/Contrast";
import Grayscale from "./pages/docs/filters/Grayscale";
import HueRotate from "./pages/docs/filters/HueRotate";
import Invert from "./pages/docs/filters/Invert";
import Saturate from "./pages/docs/filters/Saturate";
import Sepia from "./pages/docs/filters/Sepia";
import Opacity from "./pages/docs/filters/Opacity";
import BackdropBlur from "./pages/docs/filters/BackdropBlur";
import BackdropBrightness from "./pages/docs/filters/BackdropBrightness";
import BackdropContrast from "./pages/docs/filters/BackdropContrast";
import BackdropGrayscale from "./pages/docs/filters/BackdropGrayscale";
import BackdropHueRotate from "./pages/docs/filters/BackdropHueRotate";
import BackdropInvert from "./pages/docs/filters/BackdropInvert";
import BackdropOpacity from "./pages/docs/filters/BackdropOpacity";
import BackdropSaturate from "./pages/docs/filters/BackdropSaturate";
import BackdropSepia from "./pages/docs/filters/BackdropSepia";
import TransitionProperty from "./pages/docs/transitions/TransitionProperty";
import TransitionDuration from "./pages/docs/transitions/TransitionDuration";
import TransitionTimingFunction from "./pages/docs/transitions/TransitionTimingFunction";
import TransitionDelay from "./pages/docs/transitions/TransitionDelay";
import Scale from "./pages/docs/transforms/Scale";
import Rotate from "./pages/docs/transforms/Rotate";
import Translate from "./pages/docs/transforms/Translate";
import Skew from "./pages/docs/transforms/Skew";
import TransformOrigin from "./pages/docs/transforms/TransformOrigin";
import AccentColor from "./pages/docs/Interactivity/AccentColor";
import Appearance from "./pages/docs/Interactivity/Appearance";
import Cursor from "./pages/docs/Interactivity/Cursor";
import CaretColor from "./pages/docs/Interactivity/CaretColor";
import PointerEvents from "./pages/docs/Interactivity/PointerEvents";
import Resize from "./pages/docs/Interactivity/Resize";

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
            {
              path: "padding",
              element: <Padding />,
            },
            {
              path: "margin",
              element: <Margin />,
            },
            {
              path: "width",
              element: <Width />,
            },
            {
              path: "min-width",
              element: <MinWidth />,
            },
            {
              path: "max-width",
              element: <MaxWidth />,
            },
            {
              path: "height",
              element: <Height />,
            },
            {
              path: "min-height",
              element: <MinHeight />,
            },
            {
              path: "max-height",
              element: <MaxHeight />,
            },
            {
              path: "font-family",
              element: <FontFamily />,
            },
            {
              path: "font-size",
              element: <FontSize />,
            },
            {
              path: "font-style",
              element: <FontStyle />,
            },
            {
              path: "font-weight",
              element: <FontWeight />,
            },
            {
              path: "letter-spacing",
              element: <LetterSpacing />,
            },
            {
              path: "line-height",
              element: <LineHeight />,
            },
            {
              path: "list-style-position",
              element: <ListStylePosition />,
            },
            {
              path: "list-style-type",
              element: <ListStyleType />,
            },
            {
              path: "text-align",
              element: <TextAlign />,
            },
            {
              path: "text-color",
              element: <TextColor />,
            },
            {
              path: "text-decoration-line",
              element: <TextDecorationLine />,
            },
            {
              path: "text-decoration-color",
              element: <TextDecorationColor />,
            },
            {
              path: "text-decoration-style",
              element: <TextDecorationStyle />,
            },
            {
              path: "text-decoration-thickness",
              element: <TextDecorationThickness />,
            },
            {
              path: "text-underline-offset",
              element: <TextUnderlineOffset />,
            },
            {
              path: "text-transform",
              element: <TextTransform />,
            },
            {
              path: "text-overflow",
              element: <TextOverflow />,
            },
            {
              path: "text-wrap",
              element: <TextWrap />,
            },
            {
              path: "text-indent",
              element: <TextIndent />,
            },
            {
              path: "white-space",
              element: <WhiteSpace />,
            },
            {
              path: "hyphens",
              element: <Hyphens />,
            },
            {
              path: "background-attachment",
              element: <BackgroundAttachment />,
            },
            {
              path: "background-clip",
              element: <BackgroundClip />,
            },
            {
              path: "background-color",
              element: <BackgroundColor />,
            },
            {
              path: "background-origin",
              element: <BackgroundOrigin />,
            },
            {
              path: "background-position",
              element: <BackgroundPosition />,
            },
            {
              path: "background-repeat",
              element: <BackgroundRepeat />,
            },
            {
              path: "background-size",
              element: <BackgroundSize />,
            },
            {
              path: "border-radius",
              element: <BorderRadius />,
            },
            {
              path: "border-width",
              element: <BorderWidth />,
            },
            {
              path: "border-color",
              element: <BorderColor />,
            },
            {
              path: "border-style",
              element: <BorderStyle />,
            },
            {
              path: "border-collapse",
              element: <BorderCollapse />,
            },
            {
              path: "outline-width",
              element: <OutlineWidth />,
            },
            {
              path: "outline-color",
              element: <OutlineColor />,
            },
            {
              path: "outline-style",
              element: <OutlineStyle />,
            },
            {
              path: "outline-offset",
              element: <OutlineOffset />,
            },
            {
              path: "blur",
              element: <Blur />,
            },
            {
              path: "brightness",
              element: <Brightness />,
            },
            {
              path: "contrast",
              element: <Contrast />,
            },
            {
              path: "grayscale",
              element: <Grayscale />,
            },
            {
              path: "hue-rotate",
              element: <HueRotate />,
            },
            {
              path: "invert",
              element: <Invert />,
            },
            {
              path: "saturate",
              element: <Saturate />,
            },
            {
              path: "sepia",
              element: <Sepia />,
            },
            {
              path: "opacity",
              element: <Opacity />,
            },
            {
              path: "backdrop-blur",
              element: <BackdropBlur />,
            },
            {
              path: "backdrop-brightness",
              element: <BackdropBrightness />,
            },
            {
              path: "backdrop-contrast",
              element: <BackdropContrast />,
            },
            {
              path: "backdrop-grayscale",
              element: <BackdropGrayscale />,
            },
            {
              path: "backdrop-hue-rotate",
              element: <BackdropHueRotate />,
            },
            {
              path: "backdrop-invert",
              element: <BackdropInvert />,
            },
            {
              path: "backdrop-opacity",
              element: <BackdropOpacity />,
            },
            {
              path: "backdrop-saturate",
              element: <BackdropSaturate />,
            },
            {
              path: "backdrop-sepia",
              element: <BackdropSepia />,
            },
            {
              path: "transition-property",
              element: <TransitionProperty />,
            },
            {
              path: "transition-duration",
              element: <TransitionDuration />,
            },
            {
              path: "transition-timing-function",
              element: <TransitionTimingFunction />,
            },
            {
              path: "transition-delay",
              element: <TransitionDelay />,
            },
            {
              path: "scale",
              element: <Scale />,
            },
            {
              path: "rotate",
              element: <Rotate />,
            },
            {
              path: "translate",
              element: <Translate />,
            },
            {
              path: "skew",
              element: <Skew />,
            },
            {
              path: "transform-origin",
              element: <TransformOrigin />,
            },
            {
              path: "accent-color",
              element: <AccentColor />,
            },
            {
              path: "appearance",
              element: <Appearance />,
            },
            {
              path: "cursor",
              element: <Cursor />,
            },
            {
              path: "caret-color",
              element: <CaretColor />,
            },
            {
              path: "pointer-events",
              element: <PointerEvents />,
            },
            {
              path: "resize",
              element: <Resize />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
