import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Blur = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const blurRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "filter",
    tableRows: [
      {
        cssClass: "blur-none",
        data: "blur(0)",
      },
      {
        cssClass: "blur-sm",
        data: "blur(4px)",
      },
      {
        cssClass: "blur",
        data: "blur(8px)",
      },
      {
        cssClass: "blur-md",
        data: "blur(12px)",
      },
      {
        cssClass: "blur-lg",
        data: "blur(16px)",
      },
      {
        cssClass: "blur-xl",
        data: "blur(24px)",
      },
      {
        cssClass: "blur-2xl",
        data: "blur(40px)",
      },
      {
        cssClass: "blur-3xl",
        data: "blur(64px)",
      },
      {
        cssClass: "blur-4xl",
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
    {
      label: "Custom blur",
      ref: blurRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const blurCode = `
<img src="path/to/img.jpg" class="blur-lg"></img>
  `;

  const hoverCode = `
<img
  src="path/to/img.jpg"
  class="blur-lg hover-blur-xl ..."
 ...
></img>
`;

  const breakpointsCode = `
<img
  src="path/to/img.jpg"
  class="blur-lg lg-blur-xl ..."
 ...
></img>
`;

  const blurMap = `
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

$blur-map: (
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
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$blur-map: map.set($blur-map, yourCustomUtility, itsValue);

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
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$blur-map: map.set($blur-map, xl, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="filters"
          pageTitle="blur"
          pageDesc="Pre-built CSS classes for applying blur filters to an element."
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
                Utilize <span className="text-primary">&quot;blur-*</span>{" "}
                classes to apply blur filters to an element.
              </>
            }
          />
          <Code code={blurCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"blur-xl"}
        />
        <CustomUtilitiesSection
          customUtilityRef={blurRef}
          utilitySassMap={utilitySassMap}
          utilityMap={blurMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"blur"}
        />
        <Footer prevPage={"outline offset"} nextPage={"brightness"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Blur;
