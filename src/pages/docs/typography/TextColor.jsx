import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";
import { generateColorValues } from "../../../utils";

const TextColor = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const TextColorRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "color",
    tableRows: [...generateColorValues("text")],
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
      label: "Custom color",
      ref: TextColorRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const textColorCode = `
<p class="text-red">This text has red color.</p>
  `;

  const hoverCode = `
<p
  class="text-orange hover-text-yellow ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="text-orange lg-text-yellow ..."
 ...
></p>
`;

  const colorMap = `
// Theme Colors
$primary: #326dee !default;
$secondary: #1ac886 !default;
$error: #d32752 !default;
$info: #f6c31c !default;
$blue: #1919e6 !default;
$red: #e61919 !default;
$yellow: #e6e619 !default;
$green: #19e635 !default;
$orange: #ffa600 !default;
$purple: #9900ff !default;
$gray: #808080 !default;
$black: black !default;
$white: white !default;

// colors map
$colors: (
  "primary": $primary,
  "secondary": $secondary,
  "error": $error,
  "info": $info,
  "transparent": transparent,
  "inherit": inherit,
  "blue": $blue,
  "red": $red,
  "yellow": $yellow,
  "green": $green,
  "orange": $orange,
  "purple": $purple,
  "gray": $gray,
  "black": $black,
  "white": $white,
) !default;
`;

  const addUtilityCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $custom-colors: (
  "yourCustomColor": itsValue,
  ) 
);
`;

  const changeUtilityValueCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $primary: "Your Custom Value for primary color",
);
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text color"
          pageDesc="Pre-built CSS classes for managing the text color of an element."
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
                <span className="text-primary">&quot;text-*</span>{" "}
                classes for controlling the text color of an element,
              </>
            }
          />
          <Code code={textColorCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-yellow"}
        />
        <CustomUtilitiesSection
          customUtilityRef={TextColorRef}
          utilitySassMap={utilitySassMap}
          utilityMap={colorMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          isMapColor={true}
          utility={"color"}
        />
        <Footer prevPage={"text align"} nextPage={"text decoration line"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextColor;
