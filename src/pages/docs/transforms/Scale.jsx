import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Scale = () => {
  const quickReferenceRef = useRef(null);
  const scaleReferenceRef = useRef(null);
  const scaleYReferenceRef = useRef(null);
  const scaleXReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeScaleRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: scaleReferenceRef, label: "scale Reference" },
        { ref: scaleYReferenceRef, label: "scaleY Reference" },
        { ref: scaleXReferenceRef, label: "scaleX Reference" },
      ],
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
      label: "Custom scale",
      ref: customeScaleRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const scaleReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "scale-0",
        data: "scale(0)",
      },
      {
        cssClass: "scale-15",
        data: "scale(15%)",
      },
      {
        cssClass: "scale-30",
        data: "scale(30%)",
      },
      {
        cssClass: "scale-50",
        data: "scale(50%)",
      },
      {
        cssClass: "scale-60",
        data: "scale(60%)",
      },
      {
        cssClass: "scale-75",
        data: "scale(75%)",
      },
      {
        cssClass: "scale-90",
        data: "scale(90%)",
      },
      {
        cssClass: "scale-95",
        data: "scale(95%)",
      },
      {
        cssClass: "scale-100",
        data: "scale(100%)",
      },
      {
        cssClass: "scale-105",
        data: "scale(105%)",
      },
      {
        cssClass: "scale-110",
        data: "scale(110%)",
      },
      {
        cssClass: "scale-125",
        data: "scale(125%)",
      },
      {
        cssClass: "scale-150",
        data: "scale(150%)",
      },
      {
        cssClass: "scale-180",
        data: "scale(180%)",
      },
      {
        cssClass: "scale-200",
        data: "scale(200%)",
      },
    ],
  };

  const scaleYReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "scale-y-0",
        data: "scaleY(0)",
      },
      {
        cssClass: "scale-y-15",
        data: "scaleY(15%)",
      },
      {
        cssClass: "scale-y-30",
        data: "scaleY(30%)",
      },
      {
        cssClass: "scale-y-50",
        data: "scaleY(50%)",
      },
      {
        cssClass: "scale-y-60",
        data: "scaleY(60%)",
      },
      {
        cssClass: "scale-y-75",
        data: "scaleY(75%)",
      },
      {
        cssClass: "scale-y-90",
        data: "scaleY(90%)",
      },
      {
        cssClass: "scale-y-95",
        data: "scaleY(95%)",
      },
      {
        cssClass: "scale-y-100",
        data: "scaleY(100%)",
      },
      {
        cssClass: "scale-y-105",
        data: "scaleY(105%)",
      },
      {
        cssClass: "scale-y-110",
        data: "scaleY(110%)",
      },
      {
        cssClass: "scale-y-125",
        data: "scaleY(125%)",
      },
      {
        cssClass: "scale-y-150",
        data: "scaleY(150%)",
      },
      {
        cssClass: "scale-y-180",
        data: "scaleY(180%)",
      },
      {
        cssClass: "scale-y-200",
        data: "scaleY(200%)",
      },
    ],
  };

  const scaleXReference = {
    className: "transform",
    tableRows: [
      {
        cssClass: "scale-x-0",
        data: "scaleX(0)",
      },
      {
        cssClass: "scale-x-15",
        data: "scaleX(15%)",
      },
      {
        cssClass: "scale-x-30",
        data: "scaleX(30%)",
      },
      {
        cssClass: "scale-x-50",
        data: "scaleX(50%)",
      },
      {
        cssClass: "scale-x-60",
        data: "scaleX(60%)",
      },
      {
        cssClass: "scale-x-75",
        data: "scaleX(75%)",
      },
      {
        cssClass: "scale-x-90",
        data: "scaleX(90%)",
      },
      {
        cssClass: "scale-x-95",
        data: "scaleX(95%)",
      },
      {
        cssClass: "scale-x-100",
        data: "scaleX(100%)",
      },
      {
        cssClass: "scale-x-105",
        data: "scaleX(105%)",
      },
      {
        cssClass: "scale-x-110",
        data: "scaleX(110%)",
      },
      {
        cssClass: "scale-x-125",
        data: "scaleX(125%)",
      },
      {
        cssClass: "scale-x-150",
        data: "scaleX(150%)",
      },
      {
        cssClass: "scale-x-180",
        data: "scaleX(180%)",
      },
      {
        cssClass: "scale-x-200",
        data: "scaleX(200%)",
      },
    ],
  };

  const scaleCode = `
<div class="scale-y-90.."></div>
  `;

  const hoverCode = `
<div
  class="scale-15 hover-scale-30..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="scale-15 lg-scale-30..."
 ...
></div>
`;

  const scaleMap = `
// Scale map
$scale-map: (
  0: scale(0),
  15: scale(15%),
  30: scale(30%),
  50: scale(50%),
  60: scale(60%),
  75: scale(75%),
  90: scale(90%),
  95: scale(95%),
  100: scale(100%),
  105: scale(105%),
  110: scale(110%),
  125: scale(125%),
  150: scale(150%),
  180: scale(180%),
  200: scale(200%),
) !default;

// ScaleY map
$scale-y-map: (
  0: scaleY(0),
  15: scaleY(15%),
  30: scaleY(30%),
  50: scaleY(50%),
  60: scaleY(60%),
  75: scaleY(75%),
  90: scaleY(90%),
  95: scaleY(95%),
  100: scaleY(100%),
  105: scaleY(105%),
  110: scaleY(110%),
  125: scaleY(125%),
  150: scaleY(150%),
  180: scaleY(180%),
  200: scaleY(200%),
) !default;

// ScaleX map
$scale-x-map: (
  0: scaleX(0),
  15: scaleX(15%),
  30: scaleX(30%),
  50: scaleX(50%),
  60: scaleX(60%),
  75: scaleX(75%),
  90: scaleX(90%),
  95: scaleX(95%),
  100: scaleX(100%),
  105: scaleX(105%),
  110: scaleX(110%),
  125: scaleX(125%),
  150: scaleX(150%),
  180: scaleX(180%),
  200: scaleX(200%),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$scale-map: map.set($scale-map, yourCustomUtility, itsValue))
`;

  const changeUtilityValueCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$scale-map: map.set($scale-map, 100, yourCustomValue)
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="transforms"
          pageTitle="scale / scaleY / scaleX"
          pageDesc="Pre-built CSS Classes for scaling elements with transform."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="scale-reference"
            ref={scaleReferenceRef}
          >
            scale Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={scaleReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="scaleY-reference"
            ref={scaleYReferenceRef}
          >
            scaleY Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={scaleYReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="scaleX-reference"
            ref={scaleXReferenceRef}
          >
            scaleX Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={scaleXReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize the{" "}
                <span className="text-primary">&quot;scale-*&quot;</span>,{" "}
                <span className="text-primary">&quot;scale-y-*&quot;</span>,{" "} and{" "}
                <span className="text-primary">&quot;scale-x-*&quot;</span>{" "}
                classes to scale an element.
              </>
            }
          />
          <Code code={scaleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"scale-30"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeScaleRef}
          utilitySassMap={utilitySassMap}
          utilityMap={scaleMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"scale"}
        />
        <Footer prevPage={"transition delay"} nextPage={"rotate"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Scale;
