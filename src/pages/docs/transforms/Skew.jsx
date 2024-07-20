import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";
import { generateSpacingValues } from "../../../utils";

const Skew = () => {
  const quickReferenceRef = useRef(null);
  const skewYReferenceRef = useRef(null);
  const skewXReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeSkewRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: skewYReferenceRef, label: "skewY Reference" },
        { ref: skewXReferenceRef, label: "skewX Reference" },
      ],
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
      label: "Custom skew",
      ref: customeSkewRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const skewYReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "skew-y-0",
        data: "skewY(0deg)",
      },
      {
        cssClass: "skew-y-1",
        data: "skewY(1deg)",
      },
      {
        cssClass: "skew-y-2",
        data: "skewY(2deg)",
      },
      {
        cssClass: "skew-y-3",
        data: "skewY(3deg)",
      },
      {
        cssClass: "skew-y-6",
        data: "skewY(6deg)",
      },
      {
        cssClass: "skew-y-12",
        data: "skewY(12deg)",
      },
    ],
  };

  const skewXReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "skew-x-0",
        data: "skewX(0deg)",
      },
      {
        cssClass: "skew-x-1",
        data: "skewX(1deg)",
      },
      {
        cssClass: "skew-x-2",
        data: "skewX(2deg)",
      },
      {
        cssClass: "skew-x-3",
        data: "skewX(3deg)",
      },
      {
        cssClass: "skew-x-6",
        data: "skewX(6deg)",
      },
      {
        cssClass: "skew-x-12",
        data: "skewX(12deg)",
      },
    ],
  };

  const skewCode = `
<div class="skew-y-2 ..."></div>
  `;

  const hoverCode = `
<div
  class="skew-12 hover-skew-6..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="skew-12 lg-skew-6..."
 ...
></div>
`;

  const skewMap = `
// skewY map
$skew-y-map: (
  0: skewY(0deg),
  1: skewY(1deg),
  2: skewY(2deg),
  3: skewY(3deg),
  6: skewY(6deg),
  12: skewY(12deg),
) !default;

// skewX map
$skew-x-map: (
  0: skewX(0deg),
  1: skewX(1deg),
  2: skewX(2deg),
  3: skewX(3deg),
  6: skewX(6deg),
  12: skewX(12deg),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$skew-y-map: map.set($skew-y-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$skew-y-map: map.set($skew-y-map, 12, yourCustomValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transforms"
          pageTitle="skewY / skewX"
          pageDesc="Pre-built CSS Classes for skewing elements with transform."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <div
            className="docs-section"
            id="skewy-reference"
            ref={skewYReferenceRef}
          >
            <h3 className="font-medium text-light-periwinkle">
              skewY Reference
            </h3>
            <CssClassesReferenceTable cssClassesReference={skewYReference} />
          </div>
          <div
            className="docs-section"
            id="skewx-reference"
            ref={skewXReferenceRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              skewX Reference
            </h3>
            <CssClassesReferenceTable cssClassesReference={skewXReference} />
          </div>
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;skew-y-*&quot;</span>, and{" "}
                <span className="text-primary">&quot;skew-x-*&quot;</span>{" "}
                classes to skew an element.
              </>
            }
          />
          <Code code={skewCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"skew-6"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeSkewRef}
          utilitySassMap={utilitySassMap}
          utilityMap={skewMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"skew"}
        />
        <Footer prevPage={"translate"} nextPage={"transform origin"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Skew;
