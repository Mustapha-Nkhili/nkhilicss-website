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

const MinHeight = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const minHeightRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "min-height",
    tableRows: [
      { cssClass: `min-h-full`, data: "100%" },
      { cssClass: `min-h-screen`, data: "100vh" },
      { cssClass: `min-h-svh`, data: "100svh" },
      { cssClass: `min-h-lvh`, data: "100lvh" },
      { cssClass: `min-h-dvh`, data: "100dvh" },
      { cssClass: `min-h-min`, data: "min-content" },
      { cssClass: `min-h-max`, data: "max-content" },
      { cssClass: `min-h-fit`, data: "fit-content" },
      { cssClass: `min-h-0`, data: "0" },
      { cssClass: `min-h-px`, data: "1px" },
      ...generateSpacingValues("min-h"),
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
      label: "Custom min height",
      ref: minHeightRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const minHeightCode = `
<div class="min-h-6">Element with Minimum height of 1.5rem</div>
`;

  const hoverCode = `
<div
  class="min-h-11 hover-min-h-20 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="min-h-10 lg-min-h-20 ..."
 ...
></div>
`;

  const heightMap = `
$min-height-map:( 
full: 100%,
screen: 100vh,
svh: 100svh,
lvh: 100lvh,
dvh: 100dvw,
min: min-content,
max: max-content,
fit: fit-content,
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
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$min-height-map: map.set($min-height-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$min-height-map: map.set($min-height-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="sizing"
          pageTitle="min-height"
          pageDesc="Pre-built CSS classes for managing the minimum height of elements."
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
                <span className="text-primary">&quot;min-h-* &quot;</span>{" "}
                classes to set the minimum height of elements, ensuring they do
                not shrink below a specified size.
              </>
            }
          />
          <Code code={minHeightCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"min-h-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={minHeightRef}
          utilitySassMap={utilitySassMap}
          utilityMap={heightMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"min-height"}
        />
        <Footer prevPage={"height"} nextPage={"max-height"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default MinHeight;
