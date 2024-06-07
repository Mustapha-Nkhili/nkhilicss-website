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

const Height = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const heightRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "height",
    tableRows: [
      { cssClass: `h-auto`, data: "auto" },
      { cssClass: `h-full`, data: "100%" },
      {
        cssClass: "h-screen",
        data: (
          <>
            100vh
            <span className="ml-5 text-primary text-xs">
              {`// 100% of the viewport height`}
            </span>
          </>
        ),
      },
      {
        cssClass: "h-svh",
        data: (
          <>
            100svh
            <span className="ml-5 text-primary text-xs">
              {`// Small viewport height`}
            </span>
          </>
        ),
      },
      {
        cssClass: "h-lvh",
        data: (
          <>
            100lvh
            <span className="ml-5 text-primary text-xs">
              {`// Large viewport height`}
            </span>
          </>
        ),
      },
      {
        cssClass: "h-dvh",
        data: (
          <>
            100dvh
            <span className="ml-5 text-primary text-xs">
              {`// Dynamic viewport height`}
            </span>
          </>
        ),
      },
      { cssClass: `h-min`, data: "min-content" },
      { cssClass: `h-max`, data: "max-content" },
      { cssClass: `h-fit`, data: "fit-content" },
      { cssClass: `h-0`, data: "0" },
      { cssClass: `h-px`, data: "1px" },
      ...generateSpacingValues("h"),
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
      label: "Custom height",
      ref: heightRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const heightCode = `
<div class="h-screen">
  <!-- Element with full screen height -->
</div>

<div class="h-full">
  <!-- Element with full viewport height -->
</div>

<div class="h-min">
  <!-- Element with min-content height -->
</div>
`;

  const hoverCode = `
<div
  class="h-11 hover-h-20 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="h-10 lg-h-20 ..."
 ...
></div>
`;

  const heightMap = `
$height-map:( 
auto: auto,
full: 100%,
screen: 100vh,
svh: 100svh,
lvh: 100lvh,
dvh: 100dvh,
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

$height-map: map.set($height-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$height-map: map.set($height-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="sizing"
          pageTitle="height"
          pageDesc="Pre-built CSS classes for managing the height of elements."
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
                Utilize <span className="text-primary">&quot;h-* &quot;</span>{" "}
                classes to set the height of elements, controlling their
                vertical size.
              </>
            }
          />
          <Code code={heightCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"h-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={heightRef}
          utilitySassMap={utilitySassMap}
          utilityMap={heightMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"height"}
        />
        <Footer prevPage={"max width"} nextPage={"min height"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Height;
