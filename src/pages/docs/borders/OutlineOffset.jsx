import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const OutlineOffset = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const outlineOffsetRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "outline-offset",
    tableRows: [
      { cssClass: `outline-offset-none`, data: "0px" },
      { cssClass: `outline-offset`, data: "1px" },
      { cssClass: `outline-offset-2`, data: "2px" },
      { cssClass: `outline-offset-3`, data: "3px" },
      { cssClass: `outline-offset-4`, data: "4px" },
      { cssClass: `outline-offset-5`, data: "5px" },
      { cssClass: `outline-offset-6`, data: "6px" },
      { cssClass: `outline-offset-7`, data: "7px" },
      { cssClass: `outline-offset-8`, data: "8px" },
      { cssClass: `outline-offset-9`, data: "9px" },
      { cssClass: `outline-offset-10`, data: "10px" },
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
    {
      label: "Custom outline Offset",
      ref: outlineOffsetRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const outlineOffsetCode = `
<div class="outline outline-gray outline-solid outline-offset p-4">
  This div's outline is offset by 1px from the edge of the element.
</div>
`;

  const hoverCode = `
<div
  class="outline-offset-6 hover-outline-offset-10 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="outline-offset-5 lg-outline-offset-10 ..."
 ...
></div>
`;

  const OutlineOffsetMap = `
$outline-offset-map: (
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
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$outline-offset-map: map.set($outline-offset-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$outline-offset-map: map.set($outline-offset-map, 10, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="outline offset"
          pageDesc="Pre-built CSS classes to control the offset distance of an element's outline"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize{" "}
                <span className="text-primary">
                  &quot;outline-offset-* &quot;
                </span>{" "}
                classes to set the distance between an element's outline and its border edge.
              </>
            }
          />
          <Code code={outlineOffsetCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"outline-offset-10"}
        />
        <CustomUtilitiesSection
          customUtilityRef={outlineOffsetRef}
          utilitySassMap={utilitySassMap}
          utilityMap={OutlineOffsetMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"outline offset"}
        />
        <Footer prevPage={"outline style"} nextPage={"outline color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default OutlineOffset;
