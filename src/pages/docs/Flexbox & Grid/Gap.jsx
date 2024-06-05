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

const Gap = () => {
  const quickReferenceRef = useRef(null);
  const gapReferenceRef = useRef(null);
  const rowGapReferenceRef = useRef(null);
  const columnGapReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const gapRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const gapReference = {
    className: "gap",
    tableRows: [
      { cssClass: "gap-0", data: "0" },
      { cssClass: "gap-px", data: "1px" },
      ...generateSpacingValues("gap"),
    ],
  };

  const rowGapReference = {
    className: "row-gap",
    tableRows: [
      { cssClass: "gap-y-0", data: "0" },
      { cssClass: "gap-y-px", data: "1px" },
      ...generateSpacingValues("gap-y"),
    ],
  };

  const columnGapReference = {
    className: "column-gap",
    tableRows: [
      { cssClass: "gap-x-0", data: "0" },
      { cssClass: "gap-x-px", data: "1px" },
      ...generateSpacingValues("gap-x"),
    ],
  };

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: gapReferenceRef, label: "gap Reference" },
        { ref: rowGapReferenceRef, label: "row gap Reference" },
        { ref: columnGapReferenceRef, label: "column gap Reference" },
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
      label: "Custom gap",
      ref: gapRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const gapCode = `
<div class="flex gap-10..">
     <!-- Flex container with a 2.5rem gap between items -->
</div>
  `;

  const hoverCode = `
<div
  class="gap-5 hover-gap-10 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="gap-5 lg-gap-10 ..."
 ...
></div>
`;

  const gapMap = `
$base-spacing: 0.25rem !default; // 4px

$gap-map: (
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
100: $base-spacing * 100
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$gap-map: map.set($gap-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$gap-map: map.set($gap-map, 0, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="gap"
          pageDesc="Pre-built CSS classes for controlling spacing between grid and flexbox items."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="gap-reference"
            ref={gapReferenceRef}
          >
            gap Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={gapReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="row-gap-reference"
            ref={rowGapReferenceRef}
          >
            row-gap Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={rowGapReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="column-gap-reference"
            ref={columnGapReferenceRef}
          >
            column-gap Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={columnGapReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize pre-built CSS classes with{" "}
                <span className="text-primary">&quot;gap-*&quot; </span>{" "}
                properties to control the gap between grid and flexbox items.
              </>
            }
          />
          <Code code={gapCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"gap-10"}
        />
        <CustomUtilitiesSection
          customUtilityRef={gapRef}
          utilitySassMap={utilitySassMap}
          utilityMap={gapMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"gap"}
        />
        <Footer prevPage={"order"} nextPage={"justify content"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Gap;
