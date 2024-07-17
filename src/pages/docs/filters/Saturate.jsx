import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Saturate = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const saturateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "filter",
    tableRows: [
      {
        cssClass: "saturate-0",
        data: "saturate(0)",
      },
      {
        cssClass: "saturate-15",
        data: "saturate(15%)",
      },
      {
        cssClass: "saturate-30",
        data: "saturate(30%)",
      },
      {
        cssClass: "saturate-60",
        data: "saturate(60%)",
      },
      {
        cssClass: "saturate-90",
        data: "saturate(90%)",
      },
      {
        cssClass: "saturate-100",
        data: "saturate(100%)",
      },
      {
        cssClass: "saturate-180",
        data: "saturate(180%)",
      },
      {
        cssClass: "saturate-200",
        data: "saturate(200%)",
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
      label: "Custom saturate",
      ref: saturateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const saturateCode = `
<img src="path/to/img.jpg" class="saturate-60"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="saturate-60 hover-saturate-100 ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="saturate-60 lg-saturate-100 ..."
 ...
></img>
`;

  const saturateMap = `
$saturate-map: (
  0: saturate(0),
  15: saturate(15%),
  30: saturate(30%),
  60: saturate(60%),
  90: saturate(90%),
  100: saturate(100%),
  180: saturate(180%),
  200: saturate(200%),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$saturate-map: map.set($saturate-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$saturate-map: map.set($saturate-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="saturate"
          pageDesc="Pre-built CSS classes for applying saturate filters to an element."
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
                Utilize <span className="text-primary">&quot;saturate-*</span>{" "}
                classes to apply saturate filters to an element.
              </>
            }
          />
          <Code code={saturateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"saturate-100"}
        />
        <CustomUtilitiesSection
          customUtilityRef={saturateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={saturateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"saturate"}
        />
        <Footer prevPage={"invert"} nextPage={"sepia"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Saturate;
