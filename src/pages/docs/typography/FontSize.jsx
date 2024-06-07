import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const FontSize = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const fontSizeRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "font-size",
    tableRows: [
      {
        cssClass: "text-base",
        data: (
          <>
            1rem
            <span className="ml-5 text-primary">
              {`// 16px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-xs",
        data: (
          <>
            0.75rem
            <span className="ml-5 text-primary">
              {`// 12px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-sm",
        data: (
          <>
            0.875rem
            <span className="ml-5 text-primary">
              {`// 14px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-lg",
        data: (
          <>
            1.125rem
            <span className="ml-5 text-primary">
              {`// 18px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-xl",
        data: (
          <>
            1.25rem
            <span className="ml-5 text-primary">
              {`// 20px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-2xl",
        data: (
          <>
            1.5rem
            <span className="ml-5 text-primary">
              {`// 24px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-3xl",
        data: (
          <>
            1.875rem
            <span className="ml-5 text-primary">
              {`// 30px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-4xl",
        data: (
          <>
            2.25rem
            <span className="ml-5 text-primary">
              {`// 36px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-5xl",
        data: (
          <>
            3rem
            <span className="ml-5 text-primary">
              {`// 48px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-6xl",
        data: (
          <>
            3.75rem
            <span className="ml-5 text-primary">
              {`// 60px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-7xl",
        data: (
          <>
            4.5rem
            <span className="ml-5 text-primary">
              {`// 72px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-8xl",
        data: (
          <>
            6rem
            <span className="ml-5 text-primary">
              {`// 96px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-9xl",
        data: (
          <>
            7rem
            <span className="ml-5 text-primary">
              {`// 112px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h1",
        data: (
          <>
            2rem
            <span className="ml-5 text-primary">
              {`// 32px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h2",
        data: (
          <>
            1.5rem
            <span className="ml-5 text-primary">
              {`// 24px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h3",
        data: (
          <>
            1.3rem
            <span className="ml-5 text-primary">
              {`// 20.8px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h4",
        data: (
          <>
            1rem
            <span className="ml-5 text-primary">
              {`// 16px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h5",
        data: (
          <>
            0.8rem
            <span className="ml-5 text-primary">
              {`// 12.8px`}
            </span>
          </>
        ),
      },
      {
        cssClass: "text-h6",
        data: (
          <>
            0.7rem
            <span className="ml-5 text-primary">
              {`// 11.2px`}
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
      label: "Custom font size",
      ref: fontSizeRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const fontSizeCode = `
<p class="text-xs">Extra small text</p>
  `;

  const hoverCode = `
<p
  class="text-xs hover-text-3xl ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="text-xs lg-text-3xl ..."
 ...
></p>
`;

  const fontSizeMap = `
// font size variables
$font-size-base: 1rem !default;
$font-size-xs: $font-size-base * 0.75 !default;
$font-size-sm: $font-size-base * 0.875 !default;
$font-size-lg: $font-size-base * 1.125 !default;
$font-size-xl: $font-size-base * 1.25 !default;
$font-size-2xl: $font-size-base * 1.5 !default;
$font-size-3xl: $font-size-base * 1.875 !default;
$font-size-4xl: $font-size-base * 2.25 !default;
$font-size-5xl: $font-size-base * 3 !default;
$font-size-6xl: $font-size-base * 3.75 !default;
$font-size-7xl: $font-size-base * 4.5 !default;
$font-size-8xl: $font-size-base * 6 !default;
$font-size-9xl: $font-size-base * 7 !default;
$font-size-h1: 2rem !default; // 32px
$font-size-h2: 1.5rem !default; // 24px
$font-size-h3: 1.3rem !default; // 20.8px
$font-size-h4: 1rem !default; // 16px
$font-size-h5: 0.8rem !default; // 12.8px
$font-size-h6: 0.7rem !default; // 11.2px

$font-size-map: (
  base: $font-size-base,
  xs: $font-size-xs,
  sm: $font-size-sm,
  lg: $font-size-lg,
  xl: $font-size-xl,
  2xl: $font-size-2xl,
  3xl: $font-size-3xl,
  4xl: $font-size-4xl,
  5xl: $font-size-5xl,
  6xl: $font-size-6xl,
  7xl: $font-size-7xl,
  8xl: $font-size-8xl,
  9xl: $font-size-9xl,
  h1: $font-size-h1,
  h2: $font-size-h2,
  h3: $font-size-h3,
  h4: $font-size-h4,
  h5: $font-size-h5,
  h6: $font-size-h6,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$font-size-map: map.set($font-size-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $font-size-3xl: "Your Custom Value for 3xl font size",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$font-size-map: map.set($font-size-map, 3xl, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="font size"
          pageDesc="Pre-built CSS classes for managing element font size."
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
                Utilize <span className="text-primary">&quot;text-*</span>{" "}
                classes for controlling the font size of an element,
              </>
            }
          />
          <Code code={fontSizeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-3xl"}
        />
        <CustomUtilitiesSection
          customUtilityRef={fontSizeRef}
          utilitySassMap={utilitySassMap}
          utilityMap={fontSizeMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"font size"}
        />
        <Footer prevPage={"font family"} nextPage={"font style"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FontSize;
