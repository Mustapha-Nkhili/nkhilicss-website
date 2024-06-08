import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const LineHeight = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const lineHeightRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "line-height",
    tableRows: [
      {
        cssClass: "line-height-none",
        data: "1",
      },
      {
        cssClass: "line-height-sm",
        data: "1.25",
      },
      {
        cssClass: "line-height-normal",
        data: "normal",
      },
      {
        cssClass: "line-height-lg",
        data: "2",
      },
      {
        cssClass: "line-height-1",
        data: (
          <>
            0.75rem
            <span className="ml-5 text-primary">{`// 12px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-2",
        data: (
          <>
            1rem
            <span className="ml-5 text-primary">{`// 16px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-3",
        data: (
          <>
            1.25rem
            <span className="ml-5 text-primary">{`// 20px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-4",
        data: (
          <>
            1.5rem
            <span className="ml-5 text-primary">{`// 24px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-5",
        data: (
          <>
            1.75rem
            <span className="ml-5 text-primary">{`// 28px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-6",
        data: (
          <>
            2rem
            <span className="ml-5 text-primary">{`// 32px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-7",
        data: (
          <>
            2.25rem
            <span className="ml-5 text-primary">{`// 36px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-8",
        data: (
          <>
            2.5rem
            <span className="ml-5 text-primary">{`// 40px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-9",
        data: (
          <>
            3rem
            <span className="ml-5 text-primary">{`// 48px`}</span>
          </>
        ),
      },
      {
        cssClass: "line-height-10",
        data: (
          <>
            3.25rem
            <span className="ml-5 text-primary">{`// 52px`}</span>
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
      label: "Custom line height",
      ref: lineHeightRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const letterSpacingCode = `
<div class="line-height-normal">This text has normal line height.</div>
`;

  const hoverCode = `
<p
  class="line-height-normal hover-line-height-10 ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="line-height-normal lg-line-height-10 ..."
 ...
></p>
`;

  const fontSizeMap = `
$line-height-none: 1 !default;
$line-height-sm: 1.25 !default;
$line-height-normal: normal !default;
$line-height-lg: 2 !default;
$line-height-1: 0.75rem !default;
$line-height-2: 1rem !default;
$line-height-3: 1.25rem !default;
$line-height-4: 1.5rem !default;
$line-height-5: 1.75rem !default;
$line-height-6: 2rem !default;
$line-height-7: 2.25rem !default;
$line-height-8: 2.5rem !default;
$line-height-9: 3rem !default;
$line-height-10: 3.25rem !default;

$line-height-map: (
    none: $line-height-none,
    sm: $line-height-sm,
    normal: $line-height-normal,
    lg: $line-height-lg,
    1: $line-height-1,
    2: $line-height-2,
    3: $line-height-3,
    4: $line-height-4,
    5: $line-height-5,
    6: $line-height-6,
    7: $line-height-7,
    8: $line-height-8,
    9: $line-height-9,
    10: $line-height-10,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$line-height-map: map.set($line-height-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $line-height-sm: "Your Custom Value for sm line height",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$line-height-map: map.set($line-height-map, sm, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="line height"
          pageDesc="Pre-built CSS classes for managing element line height."
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
                <span className="text-primary">&quot;line-height-*</span>{" "}
                classes for controlling the line height of an element,
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
          utility={"line-height-10"}
        />
        <CustomUtilitiesSection
          customUtilityRef={lineHeightRef}
          utilitySassMap={utilitySassMap}
          utilityMap={fontSizeMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"line height"}
        />
        <Footer prevPage={"letter spacing"} nextPage={"list style position"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default LineHeight;
