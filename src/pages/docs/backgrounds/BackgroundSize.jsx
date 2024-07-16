import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackgroundSize = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backgroundSizeRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "background-size",
    tableRows: [
      {
        cssClass: "bg-auto",
        data: "auto",
      },
      {
        cssClass: "bg-cover",
        data: "cover",
      },
      {
        cssClass: "bg-contain",
        data: "contain",
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
      label: "Custom background size",
      ref: backgroundSizeRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backgroundSizeCode = `
<div class="bg-cover bg-gray border border-black border-solid p-4" style="background-image: url('example.png');">
  This div's background image covers the entire element.
</div>

<div class="bg-contain bg-gray border border-black border-solid p-4" style="background-image: url('example.png');">
  This div's background image is contained within the element.
</div>

<div class="bg-auto bg-gray border border-black border-solid p-4" style="background-image: url('example.png');">
  This div's background image is displayed at its original size.
</div>
  `;

  const hoverCode = `
<div
  class="bg-auto hover-bg-contain ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="bg-auto lg-bg-contain ..."
 ...
></div>
`;

  const backgroundSizeMap = `
$background-size-map: (
    auto: auto,
    cover: cover,
    contain: contain,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$background-size-map: map.set($background-size-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$background-size-map: map.set($background-size-map, contain, itsValue);

@use "../node_modules/nkhilicss/sass/index";
 `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background size"
          pageDesc="Pre-built CSS Classes to control the size of the background image of an element."
        />
        <section id="quick-reference" ref={quickReferenceRef} className="docs-section">
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef} className="docs-section">
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize <span className="text-primary">&quot;bg-*&quot;</span>{" "}
                properties to control the size of the background image.
              </>
            }
          />
          <Code code={backgroundSizeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"bg-contain"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backgroundSizeRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backgroundSizeMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"background size"}
        />
        <Footer prevPage={"background repeat"} nextPage={"border radius"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundSize;
