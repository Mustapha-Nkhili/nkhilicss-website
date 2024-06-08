import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const LetterSpacing = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const letterSpacingRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "letter-spacing",
    tableRows: [
      {
        cssClass: "letter-spacing-tighter",
        data: (
            <>
              -0.05em
              <span className="ml-5 text-primary">
                {`// -0.8px`}
              </span>
            </>
          ),
      },
      {
        cssClass: "letter-spacing-tight",
        data: (
            <>
              -0.025em
              <span className="ml-5 text-primary">
                {`// -0.4px`}
              </span>
            </>
          ),
      },
      {
        cssClass: "letter-spacing-normal",
        data: (
            <>
              0em
              <span className="ml-5 text-primary">
                {`// 0px`}
              </span>
            </>
          ),
      },
      {
        cssClass: "letter-spacing-wide",
        data: (
            <>
              0.025em
              <span className="ml-5 text-primary">
                {`// 0.4px`}
              </span>
            </>
          ),
      },
      {
        cssClass: "letter-spacing-wider",
        data: (
            <>
              0.05em
              <span className="ml-5 text-primary">
                {`// 0.8px`}
              </span>
            </>
          ),
      },
      {
        cssClass: "letter-spacing-widest",
        data: (
            <>
              0.1em
              <span className="ml-5 text-primary">
                {`// 1.6px`}
              </span>
            </>
          ),
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
      label: "Custom letter spacing",
      ref: letterSpacingRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const letterSpacingCode = `
<p class="letter-spacing-tight">This text has tight letter spacing.</p>
  `;

  const hoverCode = `
<p
  class="letter-spacing-tight hover-letter-spacing-wide ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="letter-spacing-tight lg-letter-spacing-wide ..."
 ...
></p>
`;

  const letterSpacingMap = `
// letter spacing variables
$letter-spacing-tighter: -0.05em !default;
$letter-spacing-tight: -0.025em !default;
$letter-spacing-normal: 0em !default;
$letter-spacing-wide: 0.025em !default;
$letter-spacing-wider: 0.05em !default;
$letter-spacing-widest: 0.1em !default;

$letter-spacing-map: (
  tighter: $letter-spacing-tighter,
  tight: $letter-spacing-tight,
  normal: $letter-spacing-normal,
  wide: $letter-spacing-wide,
  wider: $letter-spacing-wider,
  widest: $letter-spacing-widest,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$letter-spacing-map: map.set($letter-spacing-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $letter-spacing-tight: "Your Custom Value for tight letter spacing",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$letter-spacing-map: map.set($letter-spacing-map, tight, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="letter spacing"
          pageDesc="Pre-built CSS classes for managing element letter spacing."
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
                Utilize <span className="text-primary">&quot;letter-spacing-*</span>{" "}
                classes for controlling the letter spacing of an element,
              </>
            }
          />
          <Code code={letterSpacingCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"letter-spacing-wide"}
        />
        <CustomUtilitiesSection
          customUtilityRef={letterSpacingRef}
          utilitySassMap={utilitySassMap}
          utilityMap={letterSpacingMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"letter spacing"}
        />
        <Footer prevPage={"font weight"} nextPage={"line height"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default LetterSpacing;
