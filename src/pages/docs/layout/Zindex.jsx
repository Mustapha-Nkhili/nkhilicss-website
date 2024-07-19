import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Zindex = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const ZindexRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "z-index",
    tableRows: [
      {
        cssClass: "z-auto",
        data: "auto",
      },
      {
        cssClass: "z-0",
        data: "0",
      },
      {
        cssClass: "z-1",
        data: "1",
      },
      {
        cssClass: "z-2",
        data: "2",
      },
      {
        cssClass: "z-3",
        data: "3",
      },
      {
        cssClass: "z-4",
        data: "4",
      },
      {
        cssClass: "z-5",
        data: "5",
      },
      {
        cssClass: "z-6",
        data: "6",
      },
      {
        cssClass: "z-7",
        data: "7",
      },
      {
        cssClass: "z-8",
        data: "8",
      },
      {
        cssClass: "z-9",
        data: "9",
      },
      {
        cssClass: "z-10",
        data: "10",
      },
      {
        cssClass: "z-20",
        data: "20",
      },
      {
        cssClass: "z-30",
        data: "30",
      },
      {
        cssClass: "z-40",
        data: "40",
      },
      {
        cssClass: "z-50",
        data: "50",
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
      label: "Custom z-index",
      ref: ZindexRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const ZindexCode = `
<div class="absolute z-10..."></div>
  `;

  const hoverCode = `
<div
  class="absolute z-40 hover-z-50 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="relative lg-z-50 ..."
 ...
></div>
`;

  const ZindexMap = `
$z-index-map:  (
    auto: auto,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
  ), !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$z-index-map: map.set($z-index-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$z-index-map: map.set($z-index-map, 50, yourCustomValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="z index"
          pageDesc="Pre-built CSS Classes for manipulating the stacking order of an element."
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
                Utilize <span className="text-primary">&quot;z-*&quot;</span>{" "}
                properties for controlling the stacking order of elements.
              </>
            }
          />
          <Code code={ZindexCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"z-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={ZindexRef}
          utilitySassMap={utilitySassMap}
          utilityMap={ZindexMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"z-index"}
        />
        <Footer prevPage={"visibility"} nextPage={"align content"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Zindex;
