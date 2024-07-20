import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const FontFamily = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const fontFamilyRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "font-family",
    tableRows: [
      {
        cssClass: "font-sans-serif",
        data: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      {
        cssClass: "font-serif",
        data: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      },
      {
        cssClass: "font-monospace",
        data: `ui-monospace, "Courier New", Courier, monospace`,
      },
      {
        cssClass: "font-arial",
        data: `Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif`,
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
      label: "Custom font family",
      ref: fontFamilyRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const flexCode = `
<p class="font-monospace">Monospace font family</p>
  `;

  const hoverCode = `
<p
  class="font-serif hover-font-sans-serif ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="font-serif lg-font-sans-serif ..."
 ...
></p>
`;

  const fontFamilyMap = `
// font family variables
$font-sans-serif: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !default;
$font-monospace: ui-monospace, "Courier New", Courier, monospace !default;
$font-arial: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif !default;

$font-family-map: (
    sans-serif: $font-sans-serif,
    serif: $font-serif,
    monospace: $font-monospace,
    arial: $font-arial,
  ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$font-family-map: map.set($font-family-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $font-sans-serif: "Your Custom Value for sans serif font family",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$font-family-map: map.set($font-family-map, sans-serif, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="font family"
          pageDesc="Pre-built CSS classes to specify different font families for elements."
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
                Utilize <span className="text-primary">&quot;font-*</span>{" "}
                classes for controlling the font family of an element, controlling the appearance of text.
              </>
            }
          />
          <Code code={flexCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"font-sans-serif"}
        />
        <CustomUtilitiesSection
          customUtilityRef={fontFamilyRef}
          utilitySassMap={utilitySassMap}
          utilityMap={fontFamilyMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"font family"}
        />
        <Footer prevPage={"max height"} nextPage={"font size"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FontFamily;
