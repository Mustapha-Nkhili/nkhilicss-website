import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackgroundPosition = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backgroundPositionRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "background-position",
    tableRows: [
      {
        cssClass: "bg-top",
        data: "top",
      },
      {
        cssClass: "bg-center",
        data: "center",
      },
      {
        cssClass: "bg-left",
        data: "left",
      },
      {
        cssClass: "bg-left-bottom",
        data: "left bottom",
      },
      {
        cssClass: "bg-left-top",
        data: "left top",
      },
      {
        cssClass: "bg-right",
        data: "right",
      },
      {
        cssClass: "bg-right-bottom",
        data: "right bottom",
      },
      {
        cssClass: "bg-right-top",
        data: "right top",
      },
      {
        cssClass: "bg-bottom",
        data: "bottom",
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
      label: "Custom background position",
      ref: backgroundPositionRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const flexCode = `
<div class="bg-top bg-gray border border-black p-4">
  This div's background position is at the top.
</div>
  `;

  const hoverCode = `
<div
  class="bg-right hover-bg-bottom ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="bg-right lg-bg-bottom ..."
 ...
></div>
`;

  const backgroundPositionMap = `
$background-position-map: (
  top: top,
  center: center,
  left: left,
  left-bottom: left bottom,
  left-top: left top,
  right: right,
  right-bottom: right bottom,
  right-top: right top,
  bottom: bottom,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$background-position-map: map.set($background-position-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$background-position-map: map.set($background-position-map, bottom, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background position"
          pageDesc="Pre-built CSS Classes to set the background position of an element"
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
                Utilize <span className="text-primary">&quot;bg-*&quot;</span>{" "}
                properties to set the background position of an element.
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
          utility={"bg-bottom"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backgroundPositionRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backgroundPositionMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"background position"}
        />
        <Footer prevPage={"background origin"} nextPage={"background repeat"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundPosition;
