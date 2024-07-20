import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TransitionTimingFunction = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const transitionTimingFunctionRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "transition-timing-function",
    tableRows: [
      {
        cssClass: "ease-linear",
        data: "linear",
      },
      {
        cssClass: "ease-in",
        data: "cubic-bezier(0.4, 0, 1, 1)",
      },
      {
        cssClass: "ease-out",
        data: "cubic-bezier(0, 0, 0.2, 1)",
      },
      {
        cssClass: "ease-in-out",
        data: "cubic-bezier(0.4, 0, 0.2, 1)",
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
    {
      label: "Custom transition timing function",
      ref: transitionTimingFunctionRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const transitionTimingFunctionCode = `
<div class="ease-linear"></div>
  `;

  const hoverCode = `
<div
  class="ease-in hover-ease-linear ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="ease-in lg-ease-linear ..."
 ...
></div>
`;

  const transitionTimingFunctionMap = `
$transition-timing-function-map: (
  ease-linear: linear,
  ease-in: cubic-bezier(0.4, 0, 1, 1),
  ease-out: cubic-bezier(0, 0, 0.2, 1),
  ease-in-out: cubic-bezier(0.4, 0, 0.2, 1),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transition-timing-function-map: map.set($transition-timing-function-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transition-timing-function-map: map.set($transition-timing-function-map, 500, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transitions"
          pageTitle="transition timing function"
          pageDesc="Pre-built CSS classes to control an element’s easing curve."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize <span className="text-primary">&quot;ease-*</span>{" "}
                classes to control the easing of CSS transitions.
              </>
            }
          />
          <Code code={transitionTimingFunctionCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"ease-linear"}
        />
        <CustomUtilitiesSection
          customUtilityRef={transitionTimingFunctionRef}
          utilitySassMap={utilitySassMap}
          utilityMap={transitionTimingFunctionMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"transition timing function"}
        />
        <Footer
          prevPage={"transition duration"}
          nextPage={"transition delay"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TransitionTimingFunction;
