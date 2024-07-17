import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropBrightness = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropBrightnessRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-brightness-0",
        data: "brightness(0)",
      },
      {
        cssClass: "backdrop-brightness-10",
        data: "brightness(0.1)",
      },
      {
        cssClass: "backdrop-brightness-20",
        data: "brightness(0.2)",
      },
      {
        cssClass: "backdrop-brightness-30",
        data: "brightness(0.3)",
      },
      {
        cssClass: "backdrop-brightness-40",
        data: "brightness(0.4)",
      },
      {
        cssClass: "backdrop-brightness-50",
        data: "brightness(0.5)",
      },
      {
        cssClass: "backdrop-brightness-60",
        data: "brightness(0.6)",
      },
      {
        cssClass: "backdrop-brightness-70",
        data: "brightness(0.7)",
      },
      {
        cssClass: "backdrop-brightness-75",
        data: "brightness(0.75)",
      },
      {
        cssClass: "backdrop-brightness-80",
        data: "brightness(0.8)",
      },
      {
        cssClass: "backdrop-brightness-90",
        data: "brightness(0.9)",
      },
      {
        cssClass: "backdrop-brightness-95",
        data: "brightness(0.95)",
      },
      {
        cssClass: "backdrop-brightness-100",
        data: "brightness(1)",
      },
      {
        cssClass: "backdrop-brightness-105",
        data: "brightness(1.05)",
      },
      {
        cssClass: "backdrop-brightness-110",
        data: "brightness(1.1)",
      },
      {
        cssClass: "backdrop-brightness-120",
        data: "brightness(1.2)",
      },
      {
        cssClass: "backdrop-brightness-125",
        data: "brightness(1.25)",
      },
      {
        cssClass: "backdrop-brightness-150",
        data: "brightness(1.5)",
      },
      {
        cssClass: "backdrop-brightness-200",
        data: "brightness(2)",
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
      label: "Custom backdrop brightness",
      ref: backdropBrightnessRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropBrightnessCode = `
<img src="path/to/img.jpg" class="backdrop-brightness-80"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-brightness-80 hover-backdrop-brightness-200 ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-brightness-80 lg-backdrop-brightness-200 ..."
 ...
></img>
`;

  const backdropBrightnessMap = `
    $backdrop-brightness-map: (
        0: brightness(0),
        10: brightness(0.1),
        20: brightness(0.2),
        30: brightness(0.3),
        40: brightness(0.4),
        50: brightness(0.5),
        60: brightness(0.6),
        70: brightness(0.7),
        75: brightness(0.75),
        80: brightness(0.8),
        90: brightness(0.9),
        95: brightness(0.95),
        100: brightness(1),
        105: brightness(1.05),
        110: brightness(1.1),
        120: brightness(1.2),
        125: brightness(1.25),
        150: brightness(1.5),
        200: brightness(2),
    ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-brightness-map: map.set($backdrop-brightness-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$backdrop-brightness-map: map.set($backdrop-brightness-map, 100, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop brightness"
          pageDesc="Pre-built CSS classes to control an element’s backdrop brightness."
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
                <span className="text-primary">
                  &quot;backdrop-brightness-*
                </span>{" "}
                classes to apply backdrop brightness filters to an element.
              </>
            }
          />
          <Code code={backdropBrightnessCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-brightness-200"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropBrightnessRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropBrightnessMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop brightness"}
        />
        <Footer prevPage={"backdrop blur"} nextPage={"backdrop contrast"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropBrightness;
