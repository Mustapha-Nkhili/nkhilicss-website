import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TransitionDuration = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const transitionDurationRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "transition-duration",
    tableRows: [
      {
        cssClass: "duration-0",
        data: "0s",
      },
      {
        cssClass: "duration-75",
        data: "75ms",
      },
      {
        cssClass: "duration-100",
        data: "100ms",
      },
      {
        cssClass: "duration-150",
        data: "150ms",
      },
      {
        cssClass: "duration-200",
        data: "200ms",
      },
      {
        cssClass: "duration-300",
        data: "300ms",
      },
      {
        cssClass: "duration-500",
        data: "500ms",
      },
      {
        cssClass: "duration-700",
        data: "700ms",
      },
      {
        cssClass: "duration-1000",
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
      label: "Custom transition duration",
      ref: transitionDurationRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const transitionDurationCode = `
<div class="duration-300"></div>
  `;

  const hoverCode = `
<div
  class="duration-100 hover-duration-300 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="duration-100 lg-duration-300 ..."
 ...
></div>
`;

  const transitionDurationMap = `
$transition-duration-map: (
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

$transition-duration-map: map.set($transition-duration-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transition-duration-map: map.set($transition-duration-map, 500, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transitions"
          pageTitle="transition duration"
          pageDesc="Pre-built CSS classes to control an element’s transition-duration."
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
                Utilize <span className="text-primary">&quot;duration-*</span>{" "}
                classes to control the duration of CSS transitions.
              </>
            }
          />
          <Code code={transitionDurationCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"duration-300"}
        />
        <CustomUtilitiesSection
          customUtilityRef={transitionDurationRef}
          utilitySassMap={utilitySassMap}
          utilityMap={transitionDurationMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"transition duration"}
        />
        <Footer
          prevPage={"transition property"}
          nextPage={"transition timing function"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TransitionDuration;
