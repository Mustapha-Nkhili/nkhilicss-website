import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const Screens = () => {
  const overviewRef = useRef(null);
  const defaultScreensMapRef = useRef(null);
  const CustomScreensRef = useRef(null);
  const extendBreakpointsMapRef = useRef(null);
  const modifyDefaultBreakpointsRef = useRef(null);

  const onThisPage = [
    {
      label: "Overview",
      ref: overviewRef,
    },
    {
      label: "Default screens map",
      ref: defaultScreensMapRef,
    },
    {
      label: "Custom screens",
      ref: CustomScreensRef,
      subLabels: [
        { ref: extendBreakpointsMapRef, label: "Extend breakpoints map" },
        {
          ref: modifyDefaultBreakpointsRef,
          label: "Modify default breakpoints",
        },
      ],
    },
  ];

  const breakpointsMap = `
// Define a map of breakpoints for responsive design

$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  xxl: 1536px,
) !default;

  // sm => Small devices (phones)
  // md => Medium devices (tablets)
  // lg => Large devices (desktops)
  // xl => Extra large devices (large desktops)
  // xxl => Extra extra large devices (larger desktops)
  `;

  const addUtilityCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom breakpoints
  $custom-breakpoints: (
  yourCustomBreakpoints: itsValue,
  ) 
);

// Example: 
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Custom breakpoints can be defined here
  $custom-breakpoints: (
  // Example custom breakpoints
  tiny: 480px, 
  )
);
  `;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/layout/breakpoints" as *;

$breakpoints: map.set($breakpoints, predefinedBreakpoint, itsValue);

@use "../node_modules/nkhilicss/sass/index";

// Example: 
@use "sass:map";
@use "../node_modules/nkhilicss/sass/layout/breakpoints" as *;

// Here, we are setting a custom value for a predefined (sm) breakpoint
$breakpoints: map.set($breakpoints, sm, 700px);

@use "../node_modules/nkhilicss/sass/index";
  `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="Customizing screens"
          pageDesc="Customizing the default breakpoints for your project."
        />
        <section className="docs-section" id="overview" ref={overviewRef}>
          <SectionHeader
            title="Overview"
            description="In this guide, we will walk you through the process of customizing the default breakpoints (screens) in your Nkhili CSS project. Customizing breakpoints allows you to tailor the responsive design of your project to better fit your specific needs. By the end of this guide, you will have a clear understanding of how to extend the default breakpoints in Nkhili CSS and apply your custom breakpoints in your project."
          />
        </section>
        <section
          className="docs-section"
          id="default-screens-map"
          ref={defaultScreensMapRef}
        >
          <SectionHeader title="Default screens map" />
          <Code code={breakpointsMap} language="javaScript" />
        </section>

        <section
          className="docs-section"
          id="custom-screens"
          ref={CustomScreensRef}
        >
          <SectionHeader
            title="Custom screens"
            description="Effortlessly customize the screens to perfectly suit your preferences."
          />
          <div
            className="docs-section"
            id="extend-breakpoints-map"
            ref={extendBreakpointsMapRef}
          >
            <h4 className="capitalize font-medium mt-4">
              Extend breakpoints map
            </h4>
            <Code code={addUtilityCode} language="javaScript" />
          </div>
          <div
            className="docs-section"
            id="modify-default-breakpoints"
            ref={modifyDefaultBreakpointsRef}
          >
            <h4 className="capitalize font-medium mt-4">
              Modify default breakpoints
            </h4>
            <Code code={changeUtilityValueCode} language="javaScript" />
          </div>
        </section>

        <Footer prevPage={"spacing"} nextPage={"optimize"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Screens;
