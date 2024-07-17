import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const HueRotate = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const hueRotateRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "filter",
    tableRows: [
      {
        cssClass: "hue-rotate-0",
        data: "hue-rotate(0deg)",
      },
      {
        cssClass: "hue-rotate-15",
        data: "hue-rotate(15deg)",
      },
      {
        cssClass: "hue-rotate-30",
        data: "hue-rotate(30deg)",
      },
      {
        cssClass: "hue-rotate-60",
        data: "hue-rotate(60deg)",
      },
      {
        cssClass: "hue-rotate-90",
        data: "hue-rotate(90deg)",
      },
      {
        cssClass: "hue-rotate-100",
        data: "hue-rotate(100deg)",
      },
      {
        cssClass: "hue-rotate-180",
        data: "hue-rotate(180deg)",
      },
      {
        cssClass: "hue-rotate-200",
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
    {
      label: "Custom hue rotate",
      ref: hueRotateRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const hueRotateCode = `
<img src="path/to/img.jpg" class="hue-rotate-60"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="hue-rotate-60 hover-hue-rotate-100 ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="hue-rotate-60 lg-hue-rotate-100 ..."
 ...
></img>
`;

  const hueRotateMap = `
$hue-rotate-map: (
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
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$hue-rotate-map: map.set($hue-rotate-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$hue-rotate-map: map.set($hue-rotate-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="hue rotate"
          pageDesc="Pre-built CSS classes for applying hue-rotate filters to an element."
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
                Utilize <span className="text-primary">&quot;hue-rotate-*</span>{" "}
                classes to apply hue-rotate filters to an element.
              </>
            }
          />
          <Code code={hueRotateCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"hue-rotate-100"}
        />
        <CustomUtilitiesSection
          customUtilityRef={hueRotateRef}
          utilitySassMap={utilitySassMap}
          utilityMap={hueRotateMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"hue rotate"}
        />
        <Footer prevPage={"grayscale"} nextPage={"invert"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default HueRotate;
