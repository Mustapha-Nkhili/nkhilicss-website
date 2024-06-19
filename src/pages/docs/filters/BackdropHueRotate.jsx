import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropHueRotate = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropHueRotateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-hue-rotate-0",
        data: "hue-rotate(0deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-15",
        data: "hue-rotate(15deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-30",
        data: "hue-rotate(30deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-60",
        data: "hue-rotate(60deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-90",
        data: "hue-rotate(90deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-100",
        data: "hue-rotate(100deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-180",
        data: "hue-rotate(180deg)",
      },
      {
        cssClass: "backdrop-hue-rotate-200",
        data: "hue-rotate(200deg)",
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
      label: "Custom backdrop hue rotate",
      ref: backdropHueRotateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropHueRotateCode = `
<img src="path/to/img.jpg" class="backdrop-hue-rotate-60"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-hue-rotate-60 hover-backdrop-hue-rotate-100 ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-hue-rotate-60 lg-backdrop-hue-rotate-100 ..."
 ...
></img>
`;

  const backdropHueRotateMap = `
$backdrop-hue-rotate-map: (
  0: hue-rotate(0deg),
  15: hue-rotate(15deg),
  30: hue-rotate(30deg),
  60: hue-rotate(60deg),
  90: hue-rotate(90deg),
  100: hue-rotate(100deg),
  180: hue-rotate(180deg),
  200: hue-rotate(200deg),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$backdrop-hue-rotate-map: map.set($backdrop-hue-rotate-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$backdrop-hue-rotate-map: map.set($backdrop-hue-rotate-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop hue rotate"
          pageDesc="Pre-built CSS classes for applying backdrop hue-rotate filters to an element."
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
                Utilize <span className="text-primary">&quot;backdrop-hue-rotate-*</span>{" "}
                classes to apply backdrop hue-rotate filters to an element.
              </>
            }
          />
          <Code code={backdropHueRotateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-hue-rotate-100"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropHueRotateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropHueRotateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop hue rotate"}
        />
        <Footer prevPage={"backdrop grayscale"} nextPage={"backdrop invert"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropHueRotate;
