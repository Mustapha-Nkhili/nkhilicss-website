import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BorderRadius = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const borderRadiusRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "border-radius",
    tableRows: [
      {
        cssClass: "rounded-none",
        data: "0px",
      },
      {
        cssClass: "rounded-xs",
        data: (
          <>
            0.0625rem
            <span className="ml-5 text-primary">{`// 1px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-sm",
        data: (
          <>
            0.125rem
            <span className="ml-5 text-primary">{`// 2px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded",
        data: (
          <>
            0.25rem
            <span className="ml-5 text-primary">{`// 4px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-md",
        data: (
          <>
            0.375rem
            <span className="ml-5 text-primary">{`// 6px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-lg",
        data: (
          <>
            0.5rem
            <span className="ml-5 text-primary">{`// 8px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-xl",
        data: (
          <>
            0.75rem
            <span className="ml-5 text-primary">{`// 12px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-2xl",
        data: (
          <>
            1rem
            <span className="ml-5 text-primary">{`// 16px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-3xl",
        data: (
          <>
            1.5rem
            <span className="ml-5 text-primary">{`// 24px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-4xl",
        data: (
          <>
            2rem
            <span className="ml-5 text-primary">{`// 32px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-5xl",
        data: (
          <>
            2.25rem
            <span className="ml-5 text-primary">{`// 36px`}</span>
          </>
        ),
      },
      {
        cssClass: "rounded-6xl",
        data: (
          <>
            2.5rem
            <span className="ml-5 text-primary">{`// 40px`}</span>
          </>
        ),
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
      label: "Custom border radius",
      ref: borderRadiusRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const borderRadiusCode = `
<div class="rounded bg-gray border border-black border-solid p-4">
  This div has uniformly rounded corners.
</div>
  `;

  const hoverCode = `
<p
  class="rounded-xs hover-rounded-3xl ..."
 ...
></p>
`;

  const breakpointsCode = `
<p
  class="rounded-xs lg-rounded-3xl ..."
 ...
></p>
`;

  const borderRadiusMap = `
// border radius variable
$base-border-radius: 0.125rem !default;

$border-radius-map: (
  none: 0px,
  xs: 0.0625rem,
  sm: $base-border-radius,
  default: $base-border-radius * 2,
  md: $base-border-radius * 3,
  lg: $base-border-radius * 4,
  xl: $base-border-radius * 6,
  2xl: $base-border-radius * 8,
  3xl: $base-border-radius * 12,
  4xl: $base-border-radius * 16,
  5xl: $base-border-radius * 18,
  6xl: $base-border-radius * 20,
  full: 50%,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$border-radius-map: map.set($border-radius-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$border-radius-map: map.set($border-radius-map, 3xl, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="border radius"
          pageDesc="Pre-built CSS classes allow you to specify the roundness of the corners, either uniformly or for individual corners."
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
                Utilize &quot;<span className="text-primary">rounded-*</span>&quot;{" "}
                classes to control the border radius of an element.
              </>
            }
          />
          <Code code={borderRadiusCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"rounded-3xl"}
        />
        <CustomUtilitiesSection
          customUtilityRef={borderRadiusRef}
          utilitySassMap={utilitySassMap}
          utilityMap={borderRadiusMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"border radius"}
        />
        <Footer prevPage={"background size"} nextPage={"border width"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BorderRadius;
