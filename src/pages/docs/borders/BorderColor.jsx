import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";
import { generateColorValues } from "../../../utils";

const BorderColor = () => {
  const quickReferenceRef = useRef(null);
  const borderColorRef = useRef(null);
  const borderColorTopRef = useRef(null);
  const borderColorRightRef = useRef(null);
  const borderColorBottomRef = useRef(null);
  const borderColorLeftRef = useRef(null);
  const verticalBorderColorRef = useRef(null);
  const horizontalBorderColorRef = useRef(null);
  const usageRef = useRef(null);
  const usageBorderColorSingleSideRef = useRef(null);
  const usageVerticalBorderColorRef = useRef(null);
  const usageHorizontalBorderColorRef = useRef(null);
  const usageAllSidesBorderColorRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const colorRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: borderColorRef, label: "border color Reference" },
        { ref: borderColorTopRef, label: "border color top Reference" },
        { ref: borderColorRightRef, label: "border color right Reference" },
        { ref: borderColorBottomRef, label: "border color bottom Reference" },
        { ref: borderColorLeftRef, label: "border color left Reference" },
        {
          ref: verticalBorderColorRef,
          label: "vertical border color Reference",
        },
        {
          ref: horizontalBorderColorRef,
          label: "horizontal border color Reference",
        },
      ],
    },
    {
      label: "Usage",
      ref: usageRef,
      subLabels: [
        {
          ref: usageBorderColorSingleSideRef,
          label: "border color: Single side",
        },
        { ref: usageVerticalBorderColorRef, label: "border color: Vertical" },
        {
          ref: usageHorizontalBorderColorRef,
          label: "border color: Horizontal",
        },
        { ref: usageAllSidesBorderColorRef, label: "border color: All Sides" },
      ],
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
      label: "Custom color",
      ref: colorRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const borderColorReference = {
    className: "border-color",
    tableRows: generateColorValues("border"),
  };

  const borderColorTopReference = {
    className: "border-top-color",
    tableRows: generateColorValues("border-t"),
  };

  const borderColorRightReference = {
    className: "border-right-color",
    tableRows: generateColorValues("border-r"),
  };

  const borderColorBottomReference = {
    className: "border-bottom-color",
    tableRows: generateColorValues("border-b"),
  };

  const borderColorLeftReference = {
    className: "border-left-color",
    tableRows: generateColorValues("border-l"),
  };

  const horizontalBorderColorReference = {
    className: "border-left-color & border-right-color",
    tableRows: generateColorValues("border-x"),
  };

  const verticalBorderColorReference = {
    className: "border-top-color & border-bottom-color",
    tableRows: generateColorValues("border-y"),
  };

  const singleBorderColorCode = `
<div class="border-t-red">This element has a red border color on the top.</div>
<div class="border-r-yellow">This element has a yellow border color on the right.</div>
<div class="border-b-green">This element has a green border color on the bottom.</div>
<div class="border-l-black">This element has a black border color on the left.</div>
  `;

  const verticalBorderColorCode = `
  <div class="border-y-orange">orange border color on vertical sides</div>
  `;

  const horizontalBorderColorCode = `
  <div class="border-x-blue">blue border color on horizontal sides</div>
  `;

  const allSidesBorderColorCode = `
  <div class="border-error">error border color on all sides</div>
  `;
  const hoverCode = `
<div
  class="border-orange hover-border-yellow ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="border-orange lg-border-yellow ..."
 ...
></div>
`;

  const colorMap = `
// Theme Colors
$primary: #326dee !default;
$secondary: #1ac886 !default;
$error: #d32752 !default;
$info: #f6c31c !default;
$blue: #1919e6 !default;
$red: #e61919 !default;
$yellow: #e6e619 !default;
$green: #19e635 !default;
$orange: #ffa600 !default;
$purple: #9900ff !default;
$gray: #808080 !default;
$black: black !default;
$white: white !default;

// colors map
$colors: (
  "primary": $primary,
  "secondary": $secondary,
  "error": $error,
  "info": $info,
  "transparent": transparent,
  "inherit": inherit,
  "blue": $blue,
  "red": $red,
  "yellow": $yellow,
  "green": $green,
  "orange": $orange,
  "purple": $purple,
  "gray": $gray,
  "black": $black,
  "white": $white,
) !default;
`;

  const addUtilityCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $custom-colors: (
  "yourCustomColor": itsValue,
  ) 
);
`;

  const changeUtilityValueCode = `
@use "../node_modules/nkhilicss/sass/nkhilicss" with (
  // Your custom variables
  $primary: "Your Custom Value for primary color",
);
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="border color"
          pageDesc="Pre-built CSS classes for managing the border color of an element."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="border-color-reference"
            ref={borderColorRef}
          >
            border color Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={borderColorReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="border-color-top-reference"
            ref={borderColorTopRef}
          >
            border color top Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={borderColorTopReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="border-color-right-reference"
            ref={borderColorRightRef}
          >
            border color right Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={borderColorRightReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="border-color-bottom-reference"
            ref={borderColorBottomRef}
          >
            border color bottom Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={borderColorBottomReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="border-color-left-reference"
            ref={borderColorLeftRef}
          >
            border color left Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={borderColorLeftReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="vertical-border-color-reference"
            ref={verticalBorderColorRef}
          >
            vertical border color Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={verticalBorderColorReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="horizontal-border-color-reference"
            ref={horizontalBorderColorRef}
          >
            horizontal border color Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={horizontalBorderColorReference}
          />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <h3
            className="text-sm font-medium text-primary"
            id="border-color-single-side"
            ref={usageBorderColorSingleSideRef}
          >
            border color: single Side
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use the &quot;<span className="text-primary">border-t-*</span>
            &quot;, &quot;<span className="text-primary">border-r-*</span>
            &quot;, &quot;
            <span className="text-primary">border-b-*</span>&quot;, and &quot;
            <span className="text-primary">border-l-*</span>&quot; classes to
            precisely adjust the border color on specific sides of an element.
          </p>
          <div className="text-light-periwinkle text-sm mt-3">
            <label>For instance :</label>
            <ul className="mt-2 ml-5">
              <li>
                <span className="text-primary">border-t-red :</span> Adds a red border
                color on the top of the element.
              </li>
              <li>
                <span className="text-primary">border-r-yellow :</span> Adds a yellow border
                color on the right of the element.
              </li>
              <li>
                <span className="text-primary">border-b-green :</span> Adds a green border
                color on the bottom of the element.
              </li>
              <li>
                <span className="text-primary">border-l-black :</span> Adds a black border
                color on the left of the element.
              </li>
            </ul>
          </div>
          <Code code={singleBorderColorCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="border-color-vertical"
            ref={usageVerticalBorderColorRef}
          >
            border color: vertical
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;border-y-*&quot;</span>{" "}
            class to add border color to both vertical sides of an element (top
            and bottom).
          </p>
          <Code code={verticalBorderColorCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="border-color-horizontal"
            ref={usageHorizontalBorderColorRef}
          >
            border color: horizontal
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;border-x-*&quot;</span>{" "}
            class to add border color to both horizontal sides of an element
            (left and right).
          </p>
          <Code code={horizontalBorderColorCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="border-color-all-sides"
            ref={usageAllSidesBorderColorRef}
          >
            border color: all sides
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;border-*&quot;</span>{" "}
            class to add border color to all sides of an element.
          </p>
          <Code code={allSidesBorderColorCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"border-yellow"}
        />
        <CustomUtilitiesSection
          customUtilityRef={colorRef}
          utilitySassMap={utilitySassMap}
          utilityMap={colorMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"border color"}
        />
        <Footer prevPage={"border width"} nextPage={"border style"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BorderColor;
