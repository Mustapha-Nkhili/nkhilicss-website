import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const OutlineWidth = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const OutlineWidthRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "outline-width",
    tableRows: [
      { cssClass: `outline-none`, data: "0px" },
      { cssClass: `outline`, data: "1px" },
      { cssClass: `outline-2`, data: "2px" },
      { cssClass: `outline-3`, data: "3px" },
      { cssClass: `outline-4`, data: "4px" },
      { cssClass: `outline-5`, data: "5px" },
      { cssClass: `outline-6`, data: "6px" },
      { cssClass: `outline-7`, data: "7px" },
      { cssClass: `outline-8`, data: "8px" },
      { cssClass: `outline-9`, data: "9px" },
      { cssClass: `outline-10`, data: "10px" },
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
      label: "Custom outline width",
      ref: OutlineWidthRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const outlineWidthCode = `
<div class="outline-6">
  <!-- Element with 6px outline width -->
</div>
`;

  const hoverCode = `
<div
  class="outline-6 hover-outline-10 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="outline-5 lg-outline-10 ..."
 ...
></div>
`;

  const OutlineWidthMap = `
$outline-width-map: (
  none: 0px,
  default: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px,
  6: 6px,
  7: 7px,
  8: 8px,
  9: 9px,
  10: 10px,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$outline-width-map: map.set($outline-width-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$outline-width-map: map.set($outline-width-map, 10, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="outline width"
          pageDesc="Pre-built CSS classes for managing the outline width of elements."
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
                Utilize <span className="text-primary">&quot;outline-* &quot;</span>{" "}
                classes to set the outline width of elements.
              </>
            }
          />
          <Code code={outlineWidthCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"outline-10"}
        />
        <CustomUtilitiesSection
          customUtilityRef={OutlineWidthRef}
          utilitySassMap={utilitySassMap}
          utilityMap={OutlineWidthMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"outline width"}
        />
        <Footer prevPage={"border collapse"} nextPage={"outline color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default OutlineWidth;
