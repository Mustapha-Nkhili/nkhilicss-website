import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TransitionDelay = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const transitionDelayRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "transition-delay",
    tableRows: [
      {
        cssClass: "delay-0",
        data: "0s",
      },
      {
        cssClass: "delay-75",
        data: "75ms",
      },
      {
        cssClass: "delay-100",
        data: "100ms",
      },
      {
        cssClass: "delay-150",
        data: "150ms",
      },
      {
        cssClass: "delay-200",
        data: "200ms",
      },
      {
        cssClass: "delay-300",
        data: "300ms",
      },
      {
        cssClass: "delay-500",
        data: "500ms",
      },
      {
        cssClass: "delay-700",
        data: "700ms",
      },
      {
        cssClass: "delay-1000",
        data: "1000ms",
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
      label: "Custom transition delay",
      ref: transitionDelayRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const transitionDelayCode = `
<div class="delay-300"></div>
  `;

  const hoverCode = `
<div
  class="delay-100 hover-delay-300 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="delay-100 lg-delay-300 ..."
 ...
></div>
`;

  const transitionDelayMap = `
$transition-delay-map: (
  0: 0s,
  75: 75ms,
  100: 100ms,
  150: 150ms,
  200: 200ms,
  300: 300ms,
  500: 500ms,
  700: 700ms,
  1000: 1000ms,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transition-delay-map: map.set($transition-delay-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transition-delay-map: map.set($transition-delay-map, 500, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transitions"
          pageTitle="transition delay"
          pageDesc="Pre-built CSS classes to control an element’s transition-delay."
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
                Utilize <span className="text-primary">&quot;delay-*</span>{" "}
                classes to control the delay of CSS transitions.
              </>
            }
          />
          <Code code={transitionDelayCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"delay-300"}
        />
        <CustomUtilitiesSection
          customUtilityRef={transitionDelayRef}
          utilitySassMap={utilitySassMap}
          utilityMap={transitionDelayMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"transition delay"}
        />
        <Footer prevPage={"transition timing function"} nextPage={"scale"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TransitionDelay;
