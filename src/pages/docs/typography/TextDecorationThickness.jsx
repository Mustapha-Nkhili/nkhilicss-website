import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const TextDecorationThickness = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const textDecorationThicknessRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "text-decoration-thickness",
    tableRows: [
      {
        cssClass: "text-dec-auto",
        data: "auto",
      },
      {
        cssClass: "text-dec-from-font",
        data: "from-font",
      },
      {
        cssClass: "text-dec-0",
        data: "0px",
      },
      {
        cssClass: "text-dec-1",
        data: "1px",
      },
      {
        cssClass: "text-dec-2",
        data: "2px",
      },
      {
        cssClass: "text-dec-3",
        data: "3px",
      },
      {
        cssClass: "text-dec-4",
        data: "4px",
      },
      {
        cssClass: "text-dec-5",
        data: "5px",
      },
      {
        cssClass: "text-dec-6",
        data: "6px",
      },
      {
        cssClass: "text-dec-7",
        data: "7px",
      },
      {
        cssClass: "text-dec-8",
        data: "8px",
      },
      {
        cssClass: "text-dec-9",
        data: "9px",
      },
      {
        cssClass: "text-dec-10",
        data: "10px",
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
    {
      label: "Custom text decoration thickness",
      ref: textDecorationThicknessRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const textDecorationThicknesCode = `
<p class="text-dec-from-font">This text has a from-font decoration line.</p>
  `;

  const hoverCode = `
<p
  class="text-dec-2 hover-text-dec-3 ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="text-dec-2 lg-text-dec-3 ..."
 ...
></p>
`;

  const textDecorationThicknesMap = `
// Text Decoration Thickness variables
$text-decoration-thickness-0: 0px !default;
$text-decoration-thickness-1: 1px !default;
$text-decoration-thickness-2: 2px !default;
$text-decoration-thickness-3: 3px !default;
$text-decoration-thickness-4: 4px !default;
$text-decoration-thickness-5: 5px !default;
$text-decoration-thickness-6: 6px !default;
$text-decoration-thickness-7: 7px !default;
$text-decoration-thickness-8: 8px !default;
$text-decoration-thickness-9: 9px !default;
$text-decoration-thickness-10: 10px !default;

// text decoration thickness map
$text-decoration-thickness-map: (
    auto: auto,
    from-font: from-font,
    0: $text-decoration-thickness-0,
    1: $text-decoration-thickness-1,
    2: $text-decoration-thickness-2,
    3: $text-decoration-thickness-3,
    4: $text-decoration-thickness-4,
    5: $text-decoration-thickness-5,
    6: $text-decoration-thickness-6,
    7: $text-decoration-thickness-7,
    8: $text-decoration-thickness-8,
    9: $text-decoration-thickness-9,
    10: $text-decoration-thickness-10,
) !default; 
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$text-decoration-thickness-map: map.set($text-decoration-thickness-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $text-decoration-thickness-4: "Your Custom Value for 4 text decoration thicknes",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$text-decoration-thickness-map: map.set($text-decoration-thickness-map, 4, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text decoration thickness"
          pageDesc="Pre-built CSS classes to control the text decoration thickness."
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
                Utilize <span className="text-primary">&quot;text-dec-*</span>{" "}
                classes for controlling the text decoration thickness of an
                element,
              </>
            }
          />
          <Code code={textDecorationThicknesCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-dec-3"}
        />
        <CustomUtilitiesSection
          customUtilityRef={textDecorationThicknessRef}
          utilitySassMap={utilitySassMap}
          utilityMap={textDecorationThicknesMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"text decoration thickness"}
        />
        <Footer
          prevPage={"text decoration style"}
          nextPage={"text underline offset"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextDecorationThickness;
