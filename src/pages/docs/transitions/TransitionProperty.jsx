import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TransitionProperty = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const transitionPropertyRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "properties",
    tableRows: [
      {
        cssClass: "transition-none",
        data: (
          <>
            <span className="text-light-periwinkle">transition-property:</span>{" "}
            none;
          </>
        ),
      },
      {
        cssClass: "transition-all",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              all;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
      {
        cssClass: "transition",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              color, background-color, border-color, text-decoration-color,
              fill, stroke, opacity, box-shadow, transform, filter,
              backdrop-filter;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
      {
        cssClass: "transition-colors",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              color, background-color, border-color, text-decoration-color,
              fill, stroke;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
      {
        cssClass: "transition-opacity",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              opacity;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
      {
        cssClass: "transition-shadow",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              box-shadow;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
      {
        cssClass: "transition-transform",
        data: (
          <>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-property:
              </span>{" "}
              transform;
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-timing-function:
              </span>{" "}
              cubic-bezier(0.4, 0, 0.2, 1);
            </span>
            <span className="block">
              <span className="text-light-periwinkle">
                transition-duration:
              </span>{" "}
              150ms;
            </span>
          </>
        ),
      },
    ],
  };

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
    },
    {
      label: "Usage",
      ref: usageRef,
    },
    {
      label: "Executing under certain conditions",
      ref: executingUnderCertainConditionsRef,
      subLabels: [
        { ref: stateRef, label: "Hover, focus, and other states" },
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
    {
      label: "Custom transition property",
      ref: transitionPropertyRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const transitionPropertyCode = `
<div class="transition-shadow"></div>
  `;

  const hoverCode = `
<div
  class="transition-transform hover-transition-none ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="transition-transform lg-transition-none ..."
 ...
></div>
`;

  const transitionPropertyMap = `
$transition-property-map: (
  none: (
    transition-property: none,
  ),
  all: (
    transition-property: all,
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
  default: (
    transition-property: (
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
    ),
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
  colors: (
    transition-property: (
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
    ),
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
  opacity: (
    transition-property: opacity,
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
  shadow: (
    transition-property: box-shadow,
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
  transform: (
    transition-property: transform,
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    transition-duration: 150ms,
  ),
);
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$transition-property-map: map.set($transition-property-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$transition-property-map: map.set($transition-property-map, default, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transitions"
          pageTitle="transition property"
          pageDesc="Pre-built CSS classes to specify which properties should transition when they change"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize <span className="text-primary">&quot;transition-*</span>{" "}
                classes to control which CSS properties transition.
              </>
            }
          />
          <Code code={transitionPropertyCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"transition-none"}
        />
        <CustomUtilitiesSection
          customUtilityRef={transitionPropertyRef}
          utilitySassMap={utilitySassMap}
          utilityMap={transitionPropertyMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"transition property"}
        />
        <Footer prevPage={"backdrop sepia"} nextPage={"transition duration"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TransitionProperty;
