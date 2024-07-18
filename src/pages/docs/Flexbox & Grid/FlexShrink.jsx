import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const FlexShrink = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const flexShrinkRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "flex-shrink",
    tableRows: [
      {
        cssClass: "flex-shrink-1",
        data: "1",
      },
      {
        cssClass: "flex-shrink-0",
        data: "0",
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
      label: "Custom flex-shrink",
      ref: flexShrinkRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const flexCode = `
<div class="flex-shrink-1">
     <!-- Flex item that shrinks as needed -->
</div>
  `;

  const hoverCode = `
<div
  class="flex-shrink-1 hover-flex-shrink-0 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="flex-shrink-1 lg-flex-shrink-0 ..."
 ...
></div>
`;

  const flexShrinkMap = `
  $flex-shrink-map: (
    1: 1,
    0: 0,
  ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$flex-shrink-map: map.set($flex-shrink-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$flex-shrink-map: map.set($flex-shrink-map, 0, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="flex shrink"
          pageDesc="Pre-built CSS Classes for Controlling How Flex items shrink within a flex container"
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
                Utilize{" "}
                <span className="text-primary">&quot;flex-shrink-*&quot;</span>{" "}
                properties for Controlling How Flex Items shrink.
              </>
            }
          />
          <Code code={flexCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"flex-shrink-0"}
        />
        <CustomUtilitiesSection
          customUtilityRef={flexShrinkRef}
          utilitySassMap={utilitySassMap}
          utilityMap={flexShrinkMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"flex shrink"}
        />
        <Footer prevPage={"flex grow"} nextPage={"order"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FlexShrink;
