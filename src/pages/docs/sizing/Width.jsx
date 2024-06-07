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

const Width = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const WidthRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "wdith",
    tableRows: [
      { cssClass: `w-auto`, data: "auto" },
      { cssClass: `w-full`, data: "100%" },
      {
        cssClass: "w-screen",
        data: (
          <>
            100vh
            <span className="ml-5 text-primary text-xs">
              {`// 100vw for width & 100vh for height`}
            </span>
          </>
        ),
      },
      {
        cssClass: "w-svw",
        data: (
          <>
            100svw
            <span className="ml-5 text-primary text-xs">
              {`// Small viewport width`}
            </span>
          </>
        ),
      },
      {
        cssClass: "w-lvw",
        data: (
          <>
            100lvw
            <span className="ml-5 text-primary text-xs">
              {`// Large viewport width`}
            </span>
          </>
        ),
      },
      {
        cssClass: "w-dvw",
        data: (
          <>
            100dvw
            <span className="ml-5 text-primary text-xs">
              {`// Dynamic viewport width`}
            </span>
          </>
        ),
      },
      { cssClass: `w-min`, data: "min-content" },
      { cssClass: `w-max`, data: "max-content" },
      { cssClass: `w-fit`, data: "fit-content" },
      { cssClass: `w-0`, data: "0" },
      { cssClass: `w-px`, data: "1px" },
      ...generateSpacingValues("w"),
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
      label: "Custom width",
      ref: WidthRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const WidthCode = `
<div class="w-screen">
  <!-- Element with full screen width -->
</div>

<div class="w-full">
  <!-- Element with full viewport width -->
</div>

<div class="w-min">
  <!-- Element with min-content width -->
</div>
`;

  const hoverCode = `
<div
  class="w-11 hover-w-20 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="w-10 lg-w-20 ..."
 ...
></div>
`;

  const WidthMap = `
$width-map:( 
auto: auto,
full: 100%,
screen: 100vh,
svw: 100svw,
lvw: 100lvw,
dvw: 100dvw,
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

$width-map: map.set($width-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$width-map: map.set($width-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="sizing"
          pageTitle="width"
          pageDesc="Pre-built CSS classes for managing the width of elements."
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
                Utilize <span className="text-primary">&quot;w-* &quot;</span>{" "}
                classes to set the width of elements, controlling their
                horizontal size.
              </>
            }
          />
          <Code code={WidthCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"w-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={WidthRef}
          utilitySassMap={utilitySassMap}
          utilityMap={WidthMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"width"}
        />
        <Footer prevPage={"margin"} nextPage={"min-width"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Width;
