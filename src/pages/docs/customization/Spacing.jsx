import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const Spacing = () => {
  const overviewRef = useRef(null);
  const defaultColorMapRef = useRef(null);
  const CustomSpacingRef = useRef(null);
  const extendColorMapRef = useRef(null);
  const modifyDefaultSpacing = useRef(null);

  const onThisPage = [
    {
      label: "Overview",
      ref: overviewRef,
    },
    {
      label: "Default spacing map",
      ref: defaultColorMapRef,
    },
    {
      label: "Custom spacing",
      ref: CustomSpacingRef,
      subLabels: [
        { ref: extendColorMapRef, label: "Extend spacing map" },
        { ref: modifyDefaultSpacing, label: "Modify default spacing" },
      ],
    },
  ];

  const spacingMap = `
// This function generates a map of spacing values based on a base value.
// The base value can be customized to fit the design needs of your project.
// You can use these spacing values consistently across your project to maintain a cohesive design system.

// Default Spacing Variables
// These base values are used for padding, margin, and general spacing throughout the project.
// You can override these values as needed to customize the spacing scale.

$base-padding: 0.25rem !default; // 4px
$base-margin: 0.25rem !default; // 4px
$base-spacing: 0.25rem !default; // 4px

// Spacing Function
// This function accepts a base spacing value and returns a map of computed spacing values.
// The returned map includes a series of multipliers that provide a flexible spacing scale.
// You can call this function with different base values to generate customized spacing scales.

@function spacing-function($spacing-base: $base-spacing) {
  @return (
    0: 0,
    px: 1px,
    1: $spacing-base,
    2: $spacing-base * 2,
    3: $spacing-base * 3,
    4: $spacing-base * 4,
    5: $spacing-base * 5,
    6: $spacing-base * 6,
    7: $spacing-base * 7,
    8: $spacing-base * 8,
    9: $spacing-base * 9,
    10: $spacing-base * 10,
    11: $spacing-base * 11,
    12: $spacing-base * 12,
    14: $spacing-base * 14,
    16: $spacing-base * 16,
    18: $spacing-base * 18,
    20: $spacing-base * 20,
    24: $spacing-base * 24,
    28: $spacing-base * 28,
    32: $spacing-base * 32,
    36: $spacing-base * 36,
    40: $spacing-base * 40,
    44: $spacing-base * 44,
    48: $spacing-base * 48,
    52: $spacing-base * 52,
    56: $spacing-base * 56,
    60: $spacing-base * 60,
    64: $spacing-base * 64,
    68: $spacing-base * 68,
    72: $spacing-base * 72,
    76: $spacing-base * 76,
    80: $spacing-base * 80,
    84: $spacing-base * 84,
    88: $spacing-base * 88,
    92: $spacing-base * 92,
    96: $spacing-base * 96,
    100: $spacing-base * 100
  );
}
  `;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$desired-utility-map: map.set($desired-utility-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";

// Example: Adding a custom padding utility

// Import the required Sass modules and utility maps
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$padding-map: map.set($padding-map, 101, 27rem);

// Import the main nkhili CSS index file to apply the changes
@use "../node_modules/nkhilicss/sass/index";
  `;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$utility-to-modify-map: map.set($utility-to-modify-map, 5, itsValue);

@use "../node_modules/nkhilicss/sass/index";

// Example: Changing a utility value (e.g., width)

@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *; 

$width-map: map.set($width-map, 5, 5px); // Setting width utility with key 5 and value 5px

// Import the main nkhili CSS index file to apply the changes
@use "../node_modules/nkhilicss/sass/index";
  `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="Customizing Spacing"
          pageDesc="Customizing the default spacing and sizing scale for your project."
        />
        <section id="overview" ref={overviewRef}>
          <SectionHeader
            title="Overview"
            description="Discover techniques to customize the default spacing and sizing scales to better suit your project’s needs. This page covers various methods and best practices for effectively managing spacing and sizing across your application."
          />
        </section>
        <section id="default-color-map" ref={defaultColorMapRef}>
          <SectionHeader title="Default spacing map" />
          <Code code={spacingMap} language="javaScript" />
          <p className="text-sm text-light-periwinkle">
            By default, these spacing values are universally accessible across
            the framework, seamlessly integrating into padding, margin, and
            width utilities, and more.
          </p>
        </section>

        <section id="Custom spacing" ref={CustomSpacingRef}>
          <SectionHeader
            title="Custom spacing"
            description="Effortlessly customize the spacing values to perfectly suit your preferences."
          />
          <h4
            className="capitalize font-medium mt-4"
            id="extend-spacing-map"
            ref={extendColorMapRef}
          >
            Extend spacing map
          </h4>
          <Code code={addUtilityCode} language="javaScript" />
          <h4
            className="capitalize font-medium mt-4"
            id="modify-default-spacing"
            ref={modifyDefaultSpacing}
          >
            Modify default spacing
          </h4>
          <Code code={changeUtilityValueCode} language="javaScript" />
        </section>

        <Footer prevPage={"colors"} nextPage={"screens"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Spacing;
