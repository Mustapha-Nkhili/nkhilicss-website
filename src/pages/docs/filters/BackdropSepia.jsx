import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropSepia = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const sepiaRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-sepia-0",
        data: "sepia(0)",
      },
      {
        cssClass: "backdrop-sepia-50",
        data: "sepia(0.5)",
      },
      {
        cssClass: "backdrop-sepia-100",
        data: "sepia(1)",
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
      label: "Custom backdrop sepia",
      ref: sepiaRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropSepiaCode = `
<div class="backdrop-sepia-50"></div>
  `;

  const hoverCode = `
<div
  class="backdrop-sepia-50 hover-backdrop-sepia-100 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="backdrop-sepia-50 lg-backdrop-sepia-100 ..."
 ...
></div>
`;

  const sepiaMap = `
$backdrop-sepia-map: (
  0: sepia(0),
  50: sepia(0.5),
  100: sepia(1),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-sepia-map: map.set($backdrop-sepia-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-sepia-map: map.set($backdrop-sepia-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop sepia"
          pageDesc="Pre-built CSS classes for applying backdrop sepia filters to an element."
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
                Utilize <span className="text-primary">&quot;backdrop-sepia-*</span>{" "}
                classes to apply backdrop sepia filters to an element.
              </>
            }
          />
          <Code code={backdropSepiaCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-sepia-100"}
        />
        <CustomUtilitiesSection
          customUtilityRef={sepiaRef}
          utilitySassMap={utilitySassMap}
          utilityMap={sepiaMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop sepia"}
        />
        <Footer prevPage={"backdrop saturate"} nextPage={"transition property"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropSepia;
