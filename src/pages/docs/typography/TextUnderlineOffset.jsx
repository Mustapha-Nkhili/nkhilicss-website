import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TextUnderlineOffset = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const textUnderlineOffsetRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "text-underline-offset",
    tableRows: [
      {
        cssClass: "underline-offset-auto",
        data: "auto",
      },
      {
        cssClass: "underline-offset-0",
        data: "0px",
      },
      {
        cssClass: "underline-offset-1",
        data: "1px",
      },
      {
        cssClass: "underline-offset-2",
        data: "2px",
      },
      {
        cssClass: "underline-offset-3",
        data: "3px",
      },
      {
        cssClass: "underline-offset-4",
        data: "4px",
      },
      {
        cssClass: "underline-offset-5",
        data: "5px",
      },
      {
        cssClass: "underline-offset-8",
        data: "8px",
      },
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
      label: "Custom text underline offset",
      ref: textUnderlineOffsetRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const textUnderlineOffsetCode = `
<p class="underline-offset-0">No offset.</p>
  `;

  const hoverCode = `
<p
  class="underline-offset-2 hover-underline-offset-3 ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="underline-offset-2 lg-underline-offset-3 ..."
 ...
></p>
`;

  const textUnderlineOffsetMap = `
// Text Underline Offset variables
$text-underline-offset-0: 0px !default;
$text-underline-offset-1: 1px !default;
$text-underline-offset-2: 2px !default;
$text-underline-offset-3: 3px !default;
$text-underline-offset-4: 4px !default;
$text-underline-offset-5: 5px !default;
$text-underline-offset-8: 8px !default;

// text underline offset map
$text-underline-offset-map: (
  auto: auto,
  0: $text-underline-offset-0,
  1: $text-underline-offset-1,
  2: $text-underline-offset-2,
  3: $text-underline-offset-3,
  4: $text-underline-offset-4,
  5: $text-underline-offset-5,
  8: $text-underline-offset-8,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$text-underline-offset-map: map.set($text-underline-offset-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
$text-underline-offset-4: "Your Custom Value for 4 text underline offset",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$text-underline-offset-map: map.set($text-underline-offset-map, 4, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text underline offset"
          pageDesc="Pre-built CSS classes to control the text underline offset."
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
                <span className="text-primary">&quot;underline-offset-*</span>{" "}
                classes for controlling the text underline offset of an element,
              </>
            }
          />
          <Code code={textUnderlineOffsetCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"underline-offset-3"}
        />
        <CustomUtilitiesSection
          customUtilityRef={textUnderlineOffsetRef}
          utilitySassMap={utilitySassMap}
          utilityMap={textUnderlineOffsetMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"text underline offset"}
        />
        <Footer
          prevPage={"text decoration thickness"}
          nextPage={"text transform"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextUnderlineOffset;
