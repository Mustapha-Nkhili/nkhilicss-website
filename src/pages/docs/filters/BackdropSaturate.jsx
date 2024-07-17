import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropSaturate = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropSaturateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-saturate-0",
        data: "saturate(0)",
      },
      {
        cssClass: "backdrop-saturate-15",
        data: "saturate(15%)",
      },
      {
        cssClass: "backdrop-saturate-30",
        data: "saturate(30%)",
      },
      {
        cssClass: "backdrop-saturate-60",
        data: "saturate(60%)",
      },
      {
        cssClass: "backdrop-saturate-90",
        data: "saturate(90%)",
      },
      {
        cssClass: "backdrop-saturate-100",
        data: "saturate(100%)",
      },
      {
        cssClass: "backdrop-saturate-180",
        data: "saturate(180%)",
      },
      {
        cssClass: "backdrop-saturate-200",
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
      label: "Custom backdrop saturate",
      ref: backdropSaturateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropSaturateCode = `
<div class="backdrop-saturate-60"></div>
  `;

  const hoverCode = `
<div
  class="backdrop-saturate-60 hover-backdrop-saturate-100 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="backdrop-saturate-60 lg-backdrop-saturate-100 ..."
 ...
></div>
`;

  const backdropSaturateMap = `
$backdrop-saturate-map: (
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

$backdrop-saturate-map: map.set($backdrop-saturate-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-saturate-map: map.set($backdrop-saturate-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop saturate"
          pageDesc="Pre-built CSS classes for applying backdrop saturate filters to an element."
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
                Utilize <span className="text-primary">&quot;backdrop-saturate-*</span>{" "}
                classes to apply backdrop saturate filters to an element.
              </>
            }
          />
          <Code code={backdropSaturateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-saturate-100"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropSaturateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropSaturateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop saturate"}
        />
        <Footer prevPage={"backdrop opacity"} nextPage={"backdrop sepia"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropSaturate;
