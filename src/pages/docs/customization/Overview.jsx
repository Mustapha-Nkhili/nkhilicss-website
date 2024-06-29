import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const Overview = () => {
  const overviewRef = useRef(null);
  const sassVariablesRef = useRef(null);
  const themeColorsRef = useRef(null);
  const colorsMapsRef = useRef(null);
  const spacingVariablesRef = useRef(null);
  const bordersRef = useRef(null);
  const fontsRef = useRef(null);
  const letterSpacingRef = useRef(null);
  const lineHeightRef = useRef(null);
  const textRef = useRef(null);
  const filtersRef = useRef(null);

  const onThisPage = [
    {
      label: "overview",
      ref: overviewRef,
    },
    {
      label: "sass variables",
      ref: sassVariablesRef,
      subLabels: [
        { ref: themeColorsRef, label: "Theme Colors" },
        { ref: colorsMapsRef, label: "colors maps" },
        { ref: spacingVariablesRef, label: "spacing variables" },
        { ref: bordersRef, label: "borders" },
        { ref: fontsRef, label: "fonts" },
        { ref: letterSpacingRef, label: "letter spacing" },
        { ref: lineHeightRef, label: "line height" },
        { ref: textRef, label: "text" },
        { ref: filtersRef, label: "filters" },
      ],
    },
  ];

  const themeColorsCode = `
// Theme Colors
$primary: #326dee !default;
$secondary: #1ac886 !default;
$error: #d32752 !default;
// Additional theme colors are defined
 `;

  const colorsMapCode = `
// Colors Maps
$custom-colors: () !default;
$colors: (
  "primary": $primary,
  "secondary": $secondary,
  "error": $error,
  // Additional theme colors are defined
) !default;
 `;

  const customColorCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Override predefined color variables
  $primary: red,
  
  // Add custom colors to the color map
  $custom-colors: (
    "light-periwinkle": #cac6dd,
    "body": #0e0c15,
    "main-header": #0e0c15e6,
    "border-clr": #252134,
    "light-gray": #87868a,
  )
);
 `;

  const spacingVariablesCode = `
// Spacing
$base-padding: 0.25rem !default; // 4px
$base-margin: 0.25rem !default; // 4px
$base-spacing: 0.25rem !default; // 4px
 `;

  const bordersCode = `
// Borders
$base-border-thickness: 1px !default;
$base-border-radius: 0.125rem !default;
 `;

  const fontsCode = `
// Fonts

// Font-Family
$font-sans-serif: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !default;
$font-monospace: ui-monospace, "Courier New", Courier, monospace !default;
$font-arial: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif !default;

// Font-Size
$font-size-base: 1rem !default;
$font-size-xs: $font-size-base * 0.75 !default;
$font-size-sm: $font-size-base * 0.875 !default;

// Additional font size are defined

// Font-Weight
$font-weight-lighter: lighter !default;
$font-weight-light: 300 !default;
$font-weight-normal: 400 !default;

// Additional font weight are defined
 `;

  const letterSpacingCode = `
// Letter Spacing
$letter-spacing-tighter: -0.05em !default;
$letter-spacing-tight: -0.025em !default;
$letter-spacing-normal: 0em !default;

// Additional letter spacing variables are defined
  `;

  const lineHeightCode = `          
// Line Height
$line-height-none: 1 !default;
$line-height-sm: 1.25 !default;
$line-height-normal: normal !default;

// Additional line height variables are defined
 `;

  const textCode = `
// Text Decoration Thickness
$text-decoration-thickness-0: 0px !default;
$text-decoration-thickness-1: 1px !default;
$text-decoration-thickness-2: 2px !default;

// Additional text decoration thickness variables are defined

// Text Underline Offset
$text-underline-offset-0: 0px !default;
$text-underline-offset-1: 1px !default;
$text-underline-offset-2: 2px !default;

// Additional text underline offset variables are defined
 `;

  const filtersCode = `  
// Filters

// BLur
$blur-none: 0 !default;
$blur-default: 8px !default;
$blur-sm: 4px !default;

// Additional blur variables are defined
 `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="How can NkhiliCSS be customized"
          pageDesc="Create a personalized theme with extensive customization capabilities. Adapt every detail to fit your project's requirements, guaranteeing total control and flexibility in styling."
        />
        <section id="overview" ref={overviewRef}>
          <SectionHeader
            title="Overview"
            description="NkhiliCSS offers extensive customization options as a versatile CSS framework. Users can personalize everything from colors and typography to spacing, sizes, and layouts. This flexibility is achieved through a variety of customization levels"
          />
          <Code
            code={`<NkhiliCSS is a highly customizable CSS framework />`}
            language={"html"}
          />
        </section>
        <section id="sass-variables" ref={sassVariablesRef}>
          <SectionHeader
            title="Sass Variables"
            description="In NkhiliCSS, Sass variables are globally defined in the variables file located within the partials folder"
          />
          <h4
            className="font-medium mt-4"
            id="theme-colors"
            ref={themeColorsRef}
          >
            Theme Colors
          </h4>
          <Code code={themeColorsCode} language={"javascript"} />

          <h4 className="font-medium mt-4" id="colors-maps" ref={colorsMapsRef}>
            Colors Maps
          </h4>
          <Code code={colorsMapCode} language={"javascript"} />
          <p className="text-sm">
            <span className="text-info">Note:</span> To add colors to the colors
            map, simply add them to the custom colors map. To change the value
            or color of a predefined variable, update the value of that specific
            variable. For example, to change the primary color.
          </p>
          <Code code={customColorCode} language={"javascript"} />
          <h4
            className="font-medium mt-4"
            id="spacing-variables"
            ref={spacingVariablesRef}
          >
            Spacing Variables
          </h4>
          <Code code={spacingVariablesCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="borders" ref={bordersRef}>
            Borders
          </h4>
          <Code code={bordersCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="borders" ref={bordersRef}>
            Borders
          </h4>
          <Code code={bordersCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="fonts" ref={fontsRef}>
            Fonts
          </h4>
          <Code code={fontsCode} language={"javascript"} />
          <h4
            className="font-medium mt-4"
            id="letter-spacing"
            ref={letterSpacingRef}
          >
            Letter Spacing
          </h4>
          <Code code={letterSpacingCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="line-height" ref={lineHeightRef}>
            Line Height
          </h4>
          <Code code={lineHeightCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="text" ref={textRef}>
            Text
          </h4>
          <Code code={textCode} language={"javascript"} />
          <h4 className="font-medium mt-4" id="filters" ref={filtersRef}>
            Filters
          </h4>
          <Code code={filtersCode} language={"javascript"} />
        </section>
        <Footer prevPage={"introduction"} nextPage={"aspect ratio"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Overview;
