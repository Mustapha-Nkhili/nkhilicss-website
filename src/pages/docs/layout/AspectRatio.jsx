import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const AspectRatio = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customRatiosRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "aspect-ratio",
    tableRows: [
      {
        cssClass: "aspect-auto",
        data: "auto",
      },
      {
        cssClass: "aspect-square",
        data: "1",
      },
      {
        cssClass: "aspect-video",
        data: "16 / 9",
      },
      {
        cssClass: "aspect-4x3",
        data: "3 / 4",
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
      ref: quickReferenceRef,
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
      label: "Custom ratios",
      ref: customRatiosRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const videoCode = `
  <iframe
    className="aspect-video w-full border-none rounded-2"
    src="https://www.youtube.com/embed/Nnre-vnHyp0"
    title="سورة الرحمن (كاملة) | القارئ اسلام صبحي"
    allowfullscreen
  ></iframe>
`;

  const hoverVideoCode = `
<iframe
  className="hover-aspect-video ..."
 ...
></iframe>
`;

  const breakpointsCode = `
<iframe
  className="lg-aspect-square ..."
 ...
></iframe>
`;

  const aspectRatioMap = `
  $aspect-ratio-map: (
      auto: auto,
      square: calc(1 / 1),
      video: calc(16 / 9),
      4x3: calc(3 / 4),
  )
`;

  const addUtilityCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$aspect-ratio-map: map.set($aspect-ratio-map, yourCustomUtility, itsValue))
`;

  const changeUtilityValueCode = `
@use "sass:map";

@import "../node_modules/nkhilicss/sass/partials/maps";
$aspect-ratio-map: map.set($aspect-ratio-map, square, yourCustomValue)
`;
  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="aspect ratio"
          pageDesc="Pre-built CSS classes for controlling the dimensions of an element"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description="Utilize the aspect-* Pre-built CSS classes to establish the preferred aspect ratio for an element"
          />
          <div>
            <iframe
              className="aspect-video w-full border-none rounded-2"
              src="https://www.youtube.com/embed/Nnre-vnHyp0"
              title="سورة الرحمن (كاملة) | القارئ اسلام صبحي"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <Code code={videoCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverVideoCode={hoverVideoCode}
          breakpointsCode={breakpointsCode}
          utility={"aspect-square"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customRatiosRef}
          utilitySassMap={utilitySassMap}
          utilityMap={aspectRatioMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
        />
        <Footer prevPage={"installation"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default AspectRatio;
