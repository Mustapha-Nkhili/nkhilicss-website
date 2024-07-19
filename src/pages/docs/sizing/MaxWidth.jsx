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

const MaxWidth = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const maxWidthRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "max-width",
    tableRows: [
      { cssClass: `max-w-full`, data: "100%" },
      { cssClass: `max-w-min`, data: "min-content" },
      { cssClass: `max-w-max`, data: "max-content" },
      { cssClass: `max-w-fit`, data: "fit-content" },
      { cssClass: `max-w-sm`, data: "640px" },
      { cssClass: `max-w-md`, data: "768px" },
      { cssClass: `max-w-lg`, data: "1024px" },
      { cssClass: `max-w-xl`, data: "1280px" },
      { cssClass: `max-w-xxl`, data: "1536px" },
      { cssClass: `max-w-none`, data: "none" },
      { cssClass: `max-w-0`, data: "0" },
      { cssClass: `max-w-px`, data: "1px" },
      ...generateSpacingValues("max-w"),
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
      label: "Custom max width",
      ref: maxWidthRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const minWidthCode = `
<div class="max-w-6">Element with Maximum width of 1.5rem</div>
`;

  const hoverCode = `
<div
  class="max-w-11 hover-max-w-20 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="max-w-10 lg-max-w-20 ..."
 ...
></div>
`;

  const WidthMap = `
$max-width-map:( 
full: 100%,
min: min-content,
max: max-content,
fit: fit-content,
sm: 640px,
md: 768px,
lg: 1024px,
xl: 1280px,
xxl: 1536px,
none: none,
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
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$max-width-map: map.set($max-width-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$max-width-map: map.set($max-width-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="sizing"
          pageTitle="max-width"
          pageDesc="Pre-built CSS classes for managing the Maximum width of elements."
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
                Utilize{" "}
                <span className="text-primary">&quot;max-w-* &quot;</span>{" "}
                classes to set the maximum width of elements, ensuring they do
                not grow beyond a specified size.
              </>
            }
          />
          <Code code={minWidthCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"max-w-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={maxWidthRef}
          utilitySassMap={utilitySassMap}
          utilityMap={WidthMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"max-width"}
        />
        <Footer prevPage={"min width"} nextPage={"height"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default MaxWidth;
