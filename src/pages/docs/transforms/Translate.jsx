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

const Translate = () => {
  const quickReferenceRef = useRef(null);
  const translateYReferenceRef = useRef(null);
  const translateXReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeTranslateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: translateYReferenceRef, label: "translateY Reference" },
        { ref: translateXReferenceRef, label: "translateX Reference" },
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
      label: "Custom translate",
      ref: customeTranslateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const translateYReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "translate-y-full",
        data: "translateY(100%)",
      },
      {
        cssClass: "translate-y-0",
        data: "translateY(0px)",
      },
      {
        cssClass: "translate-y-px",
        data: "translateY(1px)",
      },
      ...generateSpacingValues("translate-y", "translateY"),
    ],
  };

  const translateXReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "translate-x-full",
        data: "translateX(100%)",
      },
      {
        cssClass: "translate-x-0",
        data: "translateX(0px)",
      },
      {
        cssClass: "translate-x-px",
        data: "translateX(1px)",
      },
      ...generateSpacingValues("translate-x", "translateX"),
    ],
  };

  const translateCode = `
<div class="translate-y-px ..."></div>
  `;

  const hoverCode = `
<div
  class="translate-16 hover-translate-36..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="translate-16 lg-translate-36..."
 ...
></div>
`;

  const translateMap = `
// base spacing variable
$base-spacing: 0.25rem !default; // 4px

// translateY map
$translate-y-map: (
    full: translateY(100%),
    0: translateY(0),
    px: translateY(1px),
    1: translateY($base-spacing),
    2: translateY($base-spacing * 2),
    3: translateY($base-spacing * 3),
    4: translateY($base-spacing * 4),
    5: translateY($base-spacing * 5),
    6: translateY($base-spacing * 6),
    7: translateY($base-spacing * 7),
    8: translateY($base-spacing * 8),
    9: translateY($base-spacing * 9),
    10: translateY($base-spacing * 10),
    11: translateY($base-spacing * 11),
    12: translateY($base-spacing * 12),
    14: translateY($base-spacing * 14),
    16: translateY($base-spacing * 16),
    18: translateY($base-spacing * 18),
    20: translateY($base-spacing * 20),
    24: translateY($base-spacing * 24),
    28: translateY($base-spacing * 28),
    32: translateY($base-spacing * 32),
    36: translateY($base-spacing * 36),
    40: translateY($base-spacing * 40),
    44: translateY($base-spacing * 44),
    48: translateY($base-spacing * 48),
    52: translateY($base-spacing * 52),
    56: translateY($base-spacing * 56),
    60: translateY($base-spacing * 60),
    64: translateY($base-spacing * 64),
    68: translateY($base-spacing * 68),
    72: translateY($base-spacing * 72),
    76: translateY($base-spacing * 76),
    80: translateY($base-spacing * 80),
    84: translateY($base-spacing * 84),
    88: translateY($base-spacing * 88),
    92: translateY($base-spacing * 92),
    96: translateY($base-spacing * 96),
    100: translateY($base-spacing * 100)
) !default;

// translateX map
$translate-x-map: (
    full: translateX(100%),
    0: translateX(0),
    px: translateX(1px),
    1: translateX($base-spacing),
    2: translateX($base-spacing * 2),
    3: translateX($base-spacing * 3),
    4: translateX($base-spacing * 4),
    5: translateX($base-spacing * 5),
    6: translateX($base-spacing * 6),
    7: translateX($base-spacing * 7),
    8: translateX($base-spacing * 8),
    9: translateX($base-spacing * 9),
    10: translateX($base-spacing * 10),
    11: translateX($base-spacing * 11),
    12: translateX($base-spacing * 12),
    14: translateX($base-spacing * 14),
    16: translateX($base-spacing * 16),
    18: translateX($base-spacing * 18),
    20: translateX($base-spacing * 20),
    24: translateX($base-spacing * 24),
    28: translateX($base-spacing * 28),
    32: translateX($base-spacing * 32),
    36: translateX($base-spacing * 36),
    40: translateX($base-spacing * 40),
    44: translateX($base-spacing * 44),
    48: translateX($base-spacing * 48),
    52: translateX($base-spacing * 52),
    56: translateX($base-spacing * 56),
    60: translateX($base-spacing * 60),
    64: translateX($base-spacing * 64),
    68: translateX($base-spacing * 68),
    72: translateX($base-spacing * 72),
    76: translateX($base-spacing * 76),
    80: translateX($base-spacing * 80),
    84: translateX($base-spacing * 84),
    88: translateX($base-spacing * 88),
    92: translateX($base-spacing * 92),
    96: translateX($base-spacing * 96),
    100: translateX($base-spacing * 100)
) !default;
`;

  const addUtilityCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$translate-y-map: map.set($translate-y-map, yourCustomUtility, itsValue))
`;

  const changeUtilityValueCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$translate-y-map: map.set($translate-y-map, 100, yourCustomValue)
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transforms"
          pageTitle="translateY / translateX"
          pageDesc="Pre-built CSS Classes for translating elements with transform."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium text-light-periwinkle"
            id="translateY-reference"
            ref={translateYReferenceRef}
          >
            translateY Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={translateYReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="translateX-reference"
            ref={translateXReferenceRef}
          >
            translateX Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={translateXReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;translate-y-*&quot;</span>,{" "}
                and{" "}
                <span className="text-primary">&quot;translate-x-*&quot;</span>{" "}
                classes to translate an element.
              </>
            }
          />
          <Code code={translateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"translate-36"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeTranslateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={translateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"translate"}
        />
        <Footer prevPage={"rotate"} nextPage={"skew"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Translate;
