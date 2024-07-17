import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const UtilitiesConfiguration = () => {
  const addCSSPropertyRef = useRef(null);
  const modifyPrefixUtilities = useRef(null);
  const modifyPrefixRef = useRef(null);
  const modifyPrefixExampleRef = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Modify Prefix and Values in Utilities",
      ref: modifyPrefixUtilities,
      subLabels: [
        { ref: modifyPrefixRef, label: "Modify prefix" },
        { ref: modifyPrefixExampleRef, label: "Modify prefix example" },
        { ref: addUtilityToSassMapRef, label: "add utility to sass map" },
        { ref: changeUtilityValueRef, label: "change utility value" },
      ],
    },
    {
      label: "Extend Utilities Collection with CSS Properties",
      ref: addCSSPropertyRef,
    },
  ];

  const modifyPrefixCode = `
// Import necessary modules
@use "sass:map"; // Import Sass map functions
// Import utilities from nkhilicss
@use "../node_modules/nkhilicss/sass/utils/utilities" as *;

// Access the desired utility from the utilities map
$utility-to-modify: map.get($utilities, "css-property");

// Set a custom prefix for utility classes
$updated-utility: map.set($utility-to-modify, prefix, yourCustomPrefix);

// Finalize the configuration by importing the main nkhilicss module
@use "../node_modules/nkhilicss/sass/index";
 `;

  const modifyPrefixExampleCode = `
 @use "sass:map";
 @use "../node_modules/nkhilicss/sass/utils/utilities" as *;
 
 // Access the resize utility from the utilities map
 $resize-utility: map.get($utilities, "resize");
 
 // Set a custom prefix for utility classes
 $updated-resize-utility: map.set($resize-utility, prefix, res);
 
 // Finalize the configuration by importing the main nkhilicss module
 @use "../node_modules/nkhilicss/sass/index";

  // Debug the current state of $resize-utility
 @debug $resize-utility
  // Output:
  // "resize": (
  //   prefix: resize,
  //   values: (...),
  // ),

  // Debug the updated state of $resize-utility
 @debug $updated-resize-utility;
 // Output:
 // "resize": (
 //   prefix: res,
 //   values: (...),
 // ),
  `;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$css-property-map: map.set($css-property-map, utilityClass, itsValue);

@use "../node_modules/nkhilicss/sass/index";

// Example: 

@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$flex-basis-map: map.set($flex-basis-map, 110, 26rem);

@use "../node_modules/nkhilicss/sass/index";
 `;

  const changeUtilityValueCode = `
// Method 1: Customize existing utilities

@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Define custom variables for specific utility classes
  $css-property-utilityClass: "Your Custom Value",
);
// Note: Use Method 1 only if the utility's values are defined in the variables file.
// Check the documentation for the specific CSS property to confirm variable customization options.

// Method 2: Add and modify utilities

@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$css-property-map: map.set($css-property-map, utilityClass, itsValue);

@use "../node_modules/nkhilicss/sass/index";

// Examples:

// Method 1:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  $blur-xl: "Your Custom Value for xl blur",
);

// Method 2:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$letter-spacing-map: map.set($letter-spacing-map, tight, -0.030em);

@use "../node_modules/nkhilicss/sass/index";
 `;

  const addCSSPropertyCode = `
 @use "../node_modules/nkhilicss/sass/nkhilicss" with (
 $custom-utilities: (
    "css-property": (
    prefix: yourPrefix,
    values: (
      utilityone: itsvalue,
      utilitytwo: itsvalue,
      utilitythree: itsvalue,
      // Add more utilities as needed
    ),
  )
)
);

// Note: Define a CSS property and its utilities.
// - prefix: Use a short prefix for brevity in HTML.
// - values: Map of utility class names to their corresponding CSS values.
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="How Can NkhiliCSS Utilities Be Customized"
          pageDesc="Enhance the utilities collection with extensive customization options, allowing you to tailor each detail to perfectly suit your project's requirements and offering complete control and flexibility in styling."
        />
        <section
          className="docs-section"
          id="modify-prefix-and-values-in-utilities"
          ref={modifyPrefixUtilities}
        >
          <SectionHeader
            title="Modify Prefix and Values in Utilities"
            description="Effortlessly update the prefix and utilities of a predefined utility."
          />
          <div
            className="docs-section"
            id="modify-prefix"
            ref={modifyPrefixRef}
          >
            <h4 className="font-medium mt-4">Modify prefix</h4>
            <Code code={modifyPrefixCode} language={"javaScript"} />
          </div>
          <div
            className="docs-section"
            id="modify-prefix-example"
            ref={modifyPrefixExampleRef}
          >
            <h4 className="font-medium mt-4">Modify prefix example</h4>
            <Code code={modifyPrefixExampleCode} language={"javaScript"} />
          </div>
        </section>
        <section>
          <div
            className="docs-section"
            id="add-utility-to-sass-map"
            ref={addUtilityToSassMapRef}
          >
            <h4 className="font-medium mt-10">Add Utility to Sass Map</h4>
            <p className="text-sm text-light-periwinkle mt-2">
              Adding a new utility to the collection? Just set it into the
              existing map!
            </p>
            <Code code={addUtilityCode} language="javascript" />
            <p className="text-sm text-bold text-light-periwinkle">
              <span className="text-info">NB: </span>If you want to add a
              utility to a CSS property that typically does not require
              additional utilities, such as overflow (since it already
              encompasses all necessary properties), you can easily extend it.
              In the future, if new properties are added and you wish to use
              them, follow these steps :
            </p>
            <Code
              code={`
// Import necessary modules
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities" as *;

// Access the desired utility from the utilities map
$utility-to-modify: map.get($utilities, "css-property");

// Add a new utility to the values map within $utility-to-modify
$new-values-map: map.set(
  map.get($utility-to-modify, values),
  newUtilityName,
  newUtilityValue
);

// Update $utility-to-modify with the new values map
$updated-utility: map.set($utility-to-modify, values, $new-values-map);

// Finalize the configuration by importing the main nkhilicss module
@use "../node_modules/nkhilicss/sass/index";

// Debug the current state of $utility-to-modify
@debug $utility-to-modify;
// Expected Output:
// "css-property": (
//   prefix: utilityPrefix,
//   values: (
//     predefinedUtilityOne: itsValue,
//     predefinedUtilityTwo: itsValue,
//     predefinedUtilityThree: itsValue,
//   ),
// );

// Debug the updated state of $updated-utility
@debug $updated-utility;
// Expected Output:
// "css-property": (
//   prefix: utilityPrefix,
//   values: (
//     predefinedUtilityOne: itsValue,
//     predefinedUtilityTwo: itsValue,
//     predefinedUtilityThree: itsValue,
//     newUtilityName: newUtilityValue,
//   ),
// );
 `}
              language="javascript"
            />
          </div>
          <div
            className="docs-section"
            id="change-utility-value"
            ref={changeUtilityValueRef}
          >
            <h4 className="font-medium mt-10">Change a utility value</h4>
            <p className="text-sm text-light-periwinkle mt-2">
              Modifying a utility value? just a quick update to the property
              within the map does the trick!
            </p>
            <Code code={changeUtilityValueCode} language="javascript" />
            <p className="text-sm text-bold text-light-periwinkle">
              <span className="text-info">NB: </span>To learn more about
              customizing a utility's default settings, please refer to its
              dedicated documentation page.
            </p>
          </div>
        </section>
        <section
          className="docs-section"
          id="extend-utilities-collection-with-css-properties"
          ref={addCSSPropertyRef}
        >
          <SectionHeader
            title="Extend Utilities Collection with CSS Properties"
            description="Easily integrate new CSS properties and their utilities into your custom collection."
          />
          <Code code={addCSSPropertyCode} language={"javaScript"} />
        </section>
        <Footer prevPage={"overview"} nextPage={"colors"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default UtilitiesConfiguration;
