import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import { generateSpacingValues } from "../../../utils";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TopBottomLeftRight = () => {
  const quickReferenceRef = useRef(null);
  const topReferenceRef = useRef(null);
  const bottomReferenceRef = useRef(null);
  const leftReferenceRef = useRef(null);
  const rightReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeSpacingRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: topReferenceRef, label: "top Reference" },
        { ref: bottomReferenceRef, label: "bottom Reference" },
        { ref: leftReferenceRef, label: "left Reference" },
        { ref: rightReferenceRef, label: "right Reference" },
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
    {
      label: "Custom spacing",
      ref: customeSpacingRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const topReference = {
    className: "top",
    tableRows: [
      {
        cssClass: "top-0",
        data: "0",
      },
      {
        cssClass: "top-px",
        data: "1px",
      },
      ...generateSpacingValues("top"),
    ],
  };

  const bottomReference = {
    className: "bottom",
    tableRows: [
      {
        cssClass: "bottom-0",
        data: "0",
      },
      {
        cssClass: "bottom-px",
        data: "1px",
      },
      ...generateSpacingValues("bottom"),
    ],
  };

  const leftReference = {
    className: "left",
    tableRows: [
      {
        cssClass: "left-0",
        data: "0",
      },
      {
        cssClass: "left-px",
        data: "1px",
      },
      ...generateSpacingValues("left"),
    ],
  };

  const rightReference = {
    className: "right",
    tableRows: [
      {
        cssClass: "right-0",
        data: "0",
      },
      {
        cssClass: "right-px",
        data: "1px",
      },
      ...generateSpacingValues("right"),
    ],
  };

  const positionCode = `
  <div className="relative h-52 rounded ...">
  <div className="absolute top-2 left-2 w-16 aspect-square rounded..."></div>
  <div className="absolute bottom-2 right-2 w-16 aspect-square rounded..."></div>
</div>
  `;

  const hoverCode = `
<div
  class="top-2 hover-top-4..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="top-2 lg-top-4..."
 ...
></div>
`;

  const spacingMap = `
    $spacing-map: (
      0: 0,
      px: 1px,
      1: $base-spacing,
      2: $base-spacing * 2,
      3: $base-spacing * 3,
      4: $base-spacing * 4,
      5: $base-spacing * 5,
      6: $base-spacing * 6,
      7: $base-spacing * 7,
      8: $base-spacing * 8,
      9: $base-spacing * 9,
      10: $base-spacing * 10,
      11: $base-spacing * 11,
      12: $base-spacing * 12,
      14: $base-spacing * 14,
      16: $base-spacing * 16,
      18: $base-spacing * 18,
      20: $base-spacing * 20,
      24: $base-spacing * 24,
      28: $base-spacing * 28,
      32: $base-spacing * 32,
      36: $base-spacing * 36,
      40: $base-spacing * 40,
      44: $base-spacing * 44,
      48: $base-spacing * 48,
      52: $base-spacing * 52,
      56: $base-spacing * 56,
      60: $base-spacing * 60,
      64: $base-spacing * 64,
      68: $base-spacing * 68,
      72: $base-spacing * 72,
      76: $base-spacing * 76,
      80: $base-spacing * 80,
      84: $base-spacing * 84,
      88: $base-spacing * 88,
      92: $base-spacing * 92,
      96: $base-spacing * 96,
      100: $base-spacing * 100,
    ) !default;
`;

  const addUtilityCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$spacing-map: map.set($spacing-map, yourCustomUtility, itsValue))
`;

  const changeUtilityValueCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$spacing-map: map.set($spacing-map, 100, yourCustomValue)
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="top / bottom / left / right"
          pageDesc="Pre-built CSS Classes for Positioned Element Placement"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="top-reference"
            ref={topReferenceRef}
          >
            top Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={topReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="bottom-reference"
            ref={bottomReferenceRef}
          >
            bottom Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={bottomReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="left-reference"
            ref={leftReferenceRef}
          >
            left Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={leftReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="left-reference"
            ref={rightReferenceRef}
          >
            right Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={rightReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;top&quot;</span>,{" "}
                <span className="text-primary">&quot;bottom&quot;</span>,{" "}
                <span className="text-primary">&quot;right&quot;</span>, and{" "}
                <span className="text-primary">&quot;left&quot;</span>{" "}
                properties for precise element positioning in different
                directions.
              </>
            }
          />
          <div className="relative h-52 bg-main-header rounded border border-solid border-border-clr">
            <div className="absolute top-2 left-2 w-16 aspect-square bg-primary rounded"></div>
            <div className="absolute bottom-2 right-2 w-16 aspect-square bg-primary rounded"></div>
          </div>
          <Code code={positionCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"top-4"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeSpacingRef}
          utilitySassMap={utilitySassMap}
          utilityMap={spacingMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"spacing"}
        />
        <Footer prevPage={"position"} nextPage={"visibility"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TopBottomLeftRight;
