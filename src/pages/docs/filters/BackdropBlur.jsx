import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BackdropBlur = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const backdropBlurRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "backdrop-filter",
    tableRows: [
      {
        cssClass: "backdrop-blur-none",
        data: "blur(0)",
      },
      {
        cssClass: "backdrop-blur-sm",
        data: "blur(4px)",
      },
      {
        cssClass: "blur",
        data: "blur(8px)",
      },
      {
        cssClass: "backdrop-blur-md",
        data: "blur(12px)",
      },
      {
        cssClass: "backdrop-blur-lg",
        data: "blur(16px)",
      },
      {
        cssClass: "backdrop-blur-xl",
        data: "blur(24px)",
      },
      {
        cssClass: "backdrop-blur-2xl",
        data: "blur(40px)",
      },
      {
        cssClass: "backdrop-blur-3xl",
        data: "blur(64px)",
      },
      {
        cssClass: "backdrop-blur-4xl",
        data: "blur(84px)",
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
      label: "Custom backdrop blur",
      ref: backdropBlurRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const backdropBlurCode = `
<img src="path/to/img.jpg" class="backdrop-blur-lg"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-blur-lg hover-backdrop-blur-xl ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="backdrop-blur-lg lg-backdrop-blur-xl ..."
 ...
></img>
`;

  const backdropBlurMap = `
// blur variables
$blur-none: 0 !default;
$blur-default: 8px !default;
$blur-sm: 4px !default;
$blur-md: 12px !default;
$blur-lg: 16px !default;
$blur-xl: 24px !default;
$blur-2xl: 40px !default;
$blur-3xl: 64px !default;
$blur-4xl: 84px !default;

$backdrop-blur-map: (
  none: blur($blur-none),
  default: blur($blur-default),
  sm: blur($blur-sm),
  md: blur($blur-md),
  lg: blur($blur-lg),
  xl: blur($blur-xl),
  2xl: blur($blur-2xl),
  3xl: blur($blur-3xl),
  4xl: blur($blur-4xl),
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$backdrop-blur-map: map.set($backdrop-blur-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
// If you only want to customize the exist utilities:
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $blur-xl: "Your Custom Value for xl blur",
);

// If you want to add and change utilities:
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/utilities-maps" as *;

$backdrop-blur-map: map.set($backdrop-blur-map, xl, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="backdrop blur"
          pageDesc="Pre-built CSS classes to control an element’s backdrop blur."
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
                Utilize <span className="text-primary">&quot;backdrop-blur-*</span>{" "}
                classes to apply backdrop blur filters to an element.
              </>
            }
          />
          <Code code={backdropBlurCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"backdrop-blur-xl"}
        />
        <CustomUtilitiesSection
          customUtilityRef={backdropBlurRef}
          utilitySassMap={utilitySassMap}
          utilityMap={backdropBlurMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"backdrop blur"}
        />
        <Footer prevPage={"opacity"} nextPage={"backdrop brightness"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackdropBlur;
