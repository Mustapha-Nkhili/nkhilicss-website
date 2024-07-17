import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropOpacity = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropopacityRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-opacity-0",
        data: "opacity(0)",
      },
      {
        cssClass: "backdrop-opacity-1",
        data: "opacity(0.01)"
      },
      {
        cssClass: "backdrop-opacity-2",
        data: "opacity(0.02)"
      },
      {
        cssClass: "backdrop-opacity-3",
        data: "opacity(0.03)"
      },
      {
        cssClass: "backdrop-opacity-4",
        data: "opacity(0.04)"
      },
      {
        cssClass: "backdrop-opacity-5",
        data: "opacity(0.05)"
      },
      {
        cssClass: "backdrop-opacity-6",
        data: "opacity(0.06)"
      },
      {
        cssClass: "backdrop-opacity-7",
        data: "opacity(0.07)"
      },
      {
        cssClass: "backdrop-opacity-8",
        data: "opacity(0.08)"
      },
      {
        cssClass: "backdrop-opacity-9",
        data: "opacity(0.09)"
      },
      {
        cssClass: "backdrop-opacity-10",
        data: "opacity(0.1)",
      },
      {
        cssClass: "backdrop-opacity-15",
        data: "opacity(0.15)",
      },
      {
        cssClass: "backdrop-opacity-20",
        data: "opacity(0.2)",
      },
      {
        cssClass: "backdrop-opacity-25",
        data: "opacity(0.25)",
      },
      {
        cssClass: "backdrop-opacity-30",
        data: "opacity(0.3)",
      },
      {
        cssClass: "backdrop-opacity-35",
        data: "opacity(0.35)",
      },
      {
        cssClass: "backdrop-opacity-40",
        data: "opacity(0.4)",
      },
      {
        cssClass: "backdrop-opacity-45",
        data: "opacity(0.45)",
      },
      {
        cssClass: "backdrop-opacity-50",
        data: "opacity(0.5)",
      },
      {
        cssClass: "backdrop-opacity-55",
        data: "opacity(0.55)",
      },
      {
        cssClass: "backdrop-opacity-60",
        data: "opacity(0.6)",
      },
      {
        cssClass: "backdrop-opacity-65",
        data: "opacity(0.65)",
      },
      {
        cssClass: "backdrop-opacity-70",
        data: "opacity(0.7)",
      },
      {
        cssClass: "backdrop-opacity-75",
        data: "opacity(0.75)",
      },
      {
        cssClass: "backdrop-opacity-80",
        data: "opacity(0.8)",
      },
      {
        cssClass: "backdrop-opacity-85",
        data: "opacity(0.85)",
      },
      {
        cssClass: "backdrop-opacity-90",
        data: "opacity(0.9)",
      },
      {
        cssClass: "backdrop-opacity-95",
        data: "opacity(0.95)",
      },
      {
        cssClass: "backdrop-opacity-100",
        data: "opacity(1)",
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
      label: "Custom backdrop opacity",
      ref: backdropopacityRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropOpacityCode = `
<div class="backdrop-opacity-80"></div>
  `;

  const hoverCode = `
<div
  class="backdrop-opacity-80 hover-backdrop-opacity-90 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="backdrop-opacity-80 lg-backdrop-opacity-90 ..."
 ...
></div>
`;

  const backdropOpacityMap = `
$backdrop-opacity-map: (
  0: opacity(0),
  1: opacity(0.01),
  2: opacity(0.02),
  3: opacity(0.03),
  4: opacity(0.04),
  5: opacity(0.05),
  6: opacity(0.06),
  7: opacity(0.07),
  8: opacity(0.08),
  9: opacity(0.09),
  10: opacity(0.1),
  15: opacity(0.15),
  20: opacity(0.2),
  25: opacity(0.25),
  30: opacity(0.3),
  35: opacity(0.35),
  40: opacity(0.4),
  45: opacity(0.45),
  50: opacity(0.5),
  55: opacity(0.55),
  60: opacity(0.6),
  65: opacity(0.65),
  70: opacity(0.7),
  75: opacity(0.75),
  80: opacity(0.8),
  85: opacity(0.85),
  90: opacity(0.9),
  95: opacity(0.95),
  100: opacity(1),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-opacity-map: map.set($backdrop-opacity-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-opacity-map: map.set($backdrop-opacity-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop opacity"
          pageDesc="Pre-built CSS classes for applying backdrop opacity filters to an element."
        />
        <section className="docs-section" id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize <span className="text-primary">&quot;backdrop-opacity-*</span>{" "}
                classes to apply backdrop opacity filters to an element.
              </>
            }
          />
          <Code code={backdropOpacityCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-opacity-90"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropopacityRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropOpacityMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop opacity"}
        />
        <Footer prevPage={"backdrop invert"} nextPage={"backdrop saturate"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropOpacity;
