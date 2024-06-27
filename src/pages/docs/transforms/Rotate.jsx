import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Rotate = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeRotateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

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
      label: "Custom rotate",
      ref: customeRotateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const rotateReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "rotate-0",
        data: "rotate(0deg)",
      },
      {
        cssClass: "rotate-1",
        data: "rotate(1deg)",
      },
      {
        cssClass: "rotate-2",
        data: "rotate(2deg)",
      },
      {
        cssClass: "rotate-3",
        data: "rotate(3deg)",
      },
      {
        cssClass: "rotate-6",
        data: "rotate(6deg)",
      },
      {
        cssClass: "rotate-12",
        data: "rotate(12deg)",
      },
      {
        cssClass: "rotate-15",
        data: "rotate(15deg)",
      },
      {
        cssClass: "rotate-30",
        data: "rotate(30deg)",
      },
      {
        cssClass: "rotate-45",
        data: "rotate(45deg)",
      },
      {
        cssClass: "rotate-60",
        data: "rotate(60deg)",
      },
      {
        cssClass: "rotate-90",
        data: "rotate(90deg)",
      },
      {
        cssClass: "rotate-100",
        data: "rotate(100deg)",
      },
      {
        cssClass: "rotate-180",
        data: "rotate(180deg)",
      },
    ],
  };

  const rotateCode = `
<div class="rotate-90.."></div>
  `;

  const hoverCode = `
<div
  class="rotate-6 hover-rotate-30..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="rotate-6 lg-rotate-30..."
 ...
></div>
`;

  const rotateMap = `
$rotate-map: (
  0: rotate(0deg),
  1: rotate(1deg),
  2: rotate(2deg),
  3: rotate(3deg),
  6: rotate(6deg),
  12: rotate(12deg),
  15: rotate(15deg),
  30: rotate(30deg),
  45: rotate(45deg),
  60: rotate(60deg),
  90: rotate(90deg),
  100: rotate(100deg),
  180: rotate(180deg),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$rotate-map: map.set($rotate-map, yourCustomUtility, itsValue))
`;

  const changeUtilityValueCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$rotate-map: map.set($rotate-map, 100, yourCustomValue)
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transforms"
          pageTitle="rotate"
          pageDesc="Pre-built CSS Classes for rotating elements with transform."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={rotateReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;rotate-*&quot;</span>,{" "}
                classes to rotate an element.
              </>
            }
          />
          <Code code={rotateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"rotate-30"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeRotateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={rotateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"rotate"}
        />
        <Footer prevPage={"scale"} nextPage={"translate"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Rotate;
