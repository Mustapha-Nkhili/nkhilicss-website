import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Flex = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const flexRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "flex",
    tableRows: [
      {
        cssClass: "flex-fill",
        data: "1",
      },
      {
        cssClass: "flex-auto",
        data: "1 1 auto",
      },
      {
        cssClass: "flex-initial",
        data: "0 1 auto",
      },
      {
        cssClass: "flex-none",
        data: "none",
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
    {
      label: "Custom flex",
      ref: flexRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const flexCode = `
<div class="flex-fill">
  <!-- Flex item that grows to fill available space -->
</div>
  `;

  const hoverCode = `
<div
  class="flex-fill hover-flex-none ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="flex-fill lg-flex-none ..."
 ...
></div>
`;

  const flexBasisMap = `
  $flex-map: (
    fill: 1,
    auto: 1 1 auto,
    initial: 0 1 auto,
    none: none,
  ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$flex-map: map.set($flex-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$flex-map: map.set($flex-map, fill, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="flex"
          pageDesc="Pre-built CSS Classes for Controlling How Flex Items Grow and Shrink"
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
                <span className="text-primary">&quot;flex-*&quot;</span>{" "}
                properties for Controlling How Flex Items Grow and Shrink.
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
          utility={"flex-none"}
        />
        <CustomUtilitiesSection
          customUtilityRef={flexRef}
          utilitySassMap={utilitySassMap}
          utilityMap={flexBasisMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"flex"}
        />
        <Footer prevPage={"flex wrap"} nextPage={"flex grow"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Flex;
