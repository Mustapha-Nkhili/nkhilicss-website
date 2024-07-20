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

const TextIndent = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const textIndentRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "text-indent",
    tableRows: [
      { cssClass: `indent-0`, data: "0" },
      { cssClass: `indent-px`, data: "1px" },
      ...generateSpacingValues("indent"),
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
      label: "Custom text indent",
      ref: textIndentRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const textIndentCode = `
<p class="indent-px">
    This is an example of text that has been indented. The first line of this paragraph will be indented by 1px.
</p>
`;

  const hoverCode = `
<div
  class="indent-11 hover-indent-20 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="indent-10 lg-indent-20 ..."
 ...
></div>
`;

  const textIndentMap = `
$text-indent-map:( 
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

$text-indent-map: map.set($text-indent-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$text-indent-map: map.set($text-indent-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="sizing"
          pageTitle="height"
          pageDesc="Pre-Built CSS Classes for Text Indentation."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize{" "}
                <span className="text-primary">&quot;indent-* &quot;</span>{" "}
                classes for text indentation help control the indentation of
                text within an element.
              </>
            }
          />
          <Code code={textIndentCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"indent-20"}
        />
        <CustomUtilitiesSection
          customUtilityRef={textIndentRef}
          utilitySassMap={utilitySassMap}
          utilityMap={textIndentMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"text indent"}
        />
        <Footer prevPage={"text wrap"} nextPage={"white space"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextIndent;
