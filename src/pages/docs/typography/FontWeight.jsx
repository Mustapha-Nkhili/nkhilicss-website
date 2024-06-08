import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const FontWeight = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const fontWeightRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "font-weight",
    tableRows: [
      {
        cssClass: "font-lighter",
        data: "lighter",
      },
      {
        cssClass: "font-light",
        data: "300",
      },
      {
        cssClass: "font-normal",
        data: "400",
      },
      {
        cssClass: "font-medium",
        data: "500",
      },
      {
        cssClass: "font-semibold",
        data: "600",
      },
      {
        cssClass: "font-bold",
        data: "700",
      },
      {
        cssClass: "font-bolder",
        data: "bolder",
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
      label: "Custom font weight",
      ref: fontWeightRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const fontWeightCode = `
<p class="font-light">Light text</p>
  `;

  const hoverCode = `
<p
  class="font-light hover-font-bold ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="font-light lg-font-bold ..."
 ...
></p>
`;

  const fontSizeMap = `
// font weight variables
$font-weight-lighter: lighter !default;
$font-weight-light: 300 !default;
$font-weight-normal: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-semibold: 600 !default;
$font-weight-bold: 700 !default;
$font-weight-bolder: bolder !default;

$font-weight-map: (
    lighter: $font-weight-lighter,
    light: $font-weight-light,
    normal: $font-weight-normal,
    medium: $font-weight-medium,
    semibold: $font-weight-semibold,
    bold: $font-weight-bold,
    bolder: $font-weight-bolder,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$font-weight-map: map.set($font-weight-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $font-weight-light: "Your Custom Value for light font weight",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$font-weight-map: map.set($font-weight-map, light, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="font weight"
          pageDesc="Pre-built CSS classes for managing element font weight."
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
                Utilize <span className="text-primary">&quot;font-*</span>{" "}
                classes for controlling the font weight of an element,
              </>
            }
          />
          <Code code={fontWeightCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"font-bold"}
        />
        <CustomUtilitiesSection
          customUtilityRef={fontWeightRef}
          utilitySassMap={utilitySassMap}
          utilityMap={fontSizeMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"font weight"}
        />
        <Footer prevPage={"font style"} nextPage={"letter spacing"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FontWeight;
