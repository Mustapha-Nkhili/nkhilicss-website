import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropContrast = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropContrastRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-contrast-0",
        data: "contrast(0)",
      },
      {
        cssClass: "backdrop-contrast-10",
        data: "contrast(0.1)",
      },
      {
        cssClass: "backdrop-contrast-20",
        data: "contrast(0.2)",
      },
      {
        cssClass: "backdrop-contrast-30",
        data: "contrast(0.3)",
      },
      {
        cssClass: "backdrop-contrast-40",
        data: "contrast(0.4)",
      },
      {
        cssClass: "backdrop-contrast-50",
        data: "contrast(0.5)",
      },
      {
        cssClass: "backdrop-contrast-60",
        data: "contrast(0.6)",
      },
      {
        cssClass: "backdrop-contrast-70",
        data: "contrast(0.7)",
      },
      {
        cssClass: "backdrop-contrast-75",
        data: "contrast(0.75)",
      },
      {
        cssClass: "backdrop-contrast-80",
        data: "contrast(0.8)",
      },
      {
        cssClass: "backdrop-contrast-90",
        data: "contrast(0.9)",
      },
      {
        cssClass: "backdrop-contrast-95",
        data: "contrast(0.95)",
      },
      {
        cssClass: "backdrop-contrast-100",
        data: "contrast(1)",
      },
      {
        cssClass: "backdrop-contrast-105",
        data: "contrast(1.05)",
      },
      {
        cssClass: "backdrop-contrast-110",
        data: "contrast(1.1)",
      },
      {
        cssClass: "backdrop-contrast-120",
        data: "contrast(1.2)",
      },
      {
        cssClass: "backdrop-contrast-125",
        data: "contrast(1.25)",
      },
      {
        cssClass: "backdrop-contrast-150",
        data: "contrast(1.5)",
      },
      {
        cssClass: "backdrop-contrast-200",
        data: "contrast(2)",
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
      label: "Custom backdrop contrast",
      ref: backdropContrastRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropContrastCode = `
<img src="path/to/img.jpg" class="backdrop-contrast-80"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-contrast-80 hover-backdrop-contrast-200 ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-contrast-80 lg-backdrop-contrast-200 ..."
 ...
></img>
`;

  const backdropContrastMap = `
$backdrop-contrast-map: (
  0: contrast(0),
  10: contrast(0.1),
  20: contrast(0.2),
  30: contrast(0.3),
  40: contrast(0.4),
  50: contrast(0.5),
  60: contrast(0.6),
  70: contrast(0.7),
  75: contrast(0.75),
  80: contrast(0.8),
  90: contrast(0.9),
  95: contrast(0.95),
  100: contrast(1),
  105: contrast(1.05),
  110: contrast(1.1),
  120: contrast(1.2),
  125: contrast(1.25),
  150: contrast(1.5),
  200: contrast(2),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-contrast-map: map.set($backdrop-contrast-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-contrast-map: map.set($backdrop-contrast-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop contrast"
          pageDesc="Pre-built CSS classes for applying backdrop contrast filters to an element."
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
                Utilize <span className="text-primary">&quot;backdrop-contrast-*</span>{" "}
                classes to apply backdrop contrast filters to an element.
              </>
            }
          />
          <Code code={backdropContrastCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-contrast-200"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropContrastRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropContrastMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop contrast"}
        />
        <Footer prevPage={"backdrop brightness"} nextPage={"backdrop grayscale"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropContrast;
