import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TransformOrigin = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeTransformOriginRef = useRef(null);
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
    {
      label: "Custom transform origin",
      ref: customeTransformOriginRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const transformOriginReference = {
    className: "transform-origin",
    tableRows: [
      {
        cssClass: "origin-center",
        data: "center",
      },
      {
        cssClass: "origin-top",
        data: "top",
      },
      {
        cssClass: "origin-top-right",
        data: "top right",
      },
      {
        cssClass: "origin-right",
        data: "right",
      },
      {
        cssClass: "origin-bottom-right",
        data: "bottom right",
      },
      {
        cssClass: "origin-bottom",
        data: "bottom",
      },
      {
        cssClass: "origin-bottom-left",
        data: "bottom left",
      },
      {
        cssClass: "origin-left",
        data: "left",
      },
      {
        cssClass: "origin-top-left",
        data: "top left",
      },
    ],
  };

  const transformOriginCode = `
<div class="origin-center ..."></div>
  `;

  const hoverCode = `
<div
  class="origin-bottom-right hover-origin-top..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="origin-bottom-right lg-origin-top..."
 ...
></div>
`;

  const transformOriginMap = `
$transform-origin-map: (
    center: center,
    top: top,
    top-right: top right,
    right: right,
    bottom-right: bottom right,
    bottom: bottom,
    bottom-left: bottom left,
    left: left,
    top-left: top left,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transform-origin-map: map.set($transform-origin-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$transform-origin-map: map.set($transform-origin-map, top-left, yourCustomValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transforms"
          pageTitle="transform origin"
          pageDesc="Pre-built CSS Classes to specify an element’s transform origin."
        />
        <section className="docs-section" id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable
            cssClassesReference={transformOriginReference}
          />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;origin-*&quot;</span>,{" "}
                classes to specify an element’s transform origin.
              </>
            }
          />
          <Code code={transformOriginCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"origin-top"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeTransformOriginRef}
          utilitySassMap={utilitySassMap}
          utilityMap={transformOriginMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"transform origin"}
        />
        <Footer prevPage={"skew"} nextPage={"accent color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TransformOrigin;
