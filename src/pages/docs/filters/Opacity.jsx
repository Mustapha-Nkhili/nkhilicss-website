import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Opacity = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const opacityRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "opacity",
    tableRows: [
      {
        cssClass: "opacity-0",
        data: "0",
      },
      {
        cssClass: "opacity-1",
        data: "0.01"
      },
      {
        cssClass: "opacity-2",
        data: "0.02"
      },
      {
        cssClass: "opacity-3",
        data: "0.03"
      },
      {
        cssClass: "opacity-4",
        data: "0.04"
      },
      {
        cssClass: "opacity-5",
        data: "0.05"
      },
      {
        cssClass: "opacity-6",
        data: "0.06"
      },
      {
        cssClass: "opacity-7",
        data: "0.07"
      },
      {
        cssClass: "opacity-8",
        data: "0.08"
      },
      {
        cssClass: "opacity-9",
        data: "0.09"
      },
      {
        cssClass: "opacity-10",
        data: "0.1",
      },
      {
        cssClass: "opacity-20",
        data: "0.2",
      },
      {
        cssClass: "opacity-30",
        data: "0.3",
      },
      {
        cssClass: "opacity-40",
        data: "0.4",
      },
      {
        cssClass: "opacity-50",
        data: "0.5",
      },
      {
        cssClass: "opacity-60",
        data: "0.6",
      },
      {
        cssClass: "opacity-70",
        data: "0.7",
      },
      {
        cssClass: "opacity-80",
        data: "0.8",
      },
      {
        cssClass: "opacity-90",
        data: "0.9",
      },
      {
        cssClass: "opacity-100",
        data: "1",
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
      label: "Custom opacity",
      ref: opacityRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const OpacityCode = `
<div class="opacity-80"></div>
  `;

  const hoverCode = `
<div
  class="opacity-80 hover"opacity-90 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="opacity-80 lg"opacity-90 ..."
 ...
></div>
`;

  const OpacityMap = `
$opacity-map: (
  0: 0,
  1: 0.01,
  2: 0.02,
  3: 0.03,
  4: 0.04,
  5: 0.05,
  6: 0.06,
  7: 0.07,
  8: 0.08,
  9: 0.09,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$opacity-map: map.set($opacity-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$opacity-map: map.set($opacity-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle=" opacity"
          pageDesc="Pre-built CSS classes for applying  opacity filters to an element."
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
                Utilize <span className="text-primary">&quot;opacity-*&quot;</span>{" "}
                classes to apply  opacity filters to an element.
              </>
            }
          />
          <Code code={OpacityCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"opacity-90"}
        />
        <CustomUtilitiesSection
          customUtilityRef={opacityRef}
          utilitySassMap={utilitySassMap}
          utilityMap={OpacityMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"opacity"}
        />
        <Footer prevPage={"sepia"} nextPage={"backdrop blur"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Opacity;
