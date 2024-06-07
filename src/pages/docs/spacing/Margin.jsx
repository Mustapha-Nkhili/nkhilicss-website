import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import { generateSpacingValues } from "../../../utils";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Margin = () => {
  const quickReferenceRef = useRef(null);
  const marginRef = useRef(null);
  const marginTopRef = useRef(null);
  const marginRightRef = useRef(null);
  const marginBottomRef = useRef(null);
  const marginLeftRef = useRef(null);
  const verticalMargingRef = useRef(null);
  const horizontalMargingRef = useRef(null);
  const usageRef = useRef(null);
  const usageMarginSingleSideRef = useRef(null);
  const usageVerticalMargingRef = useRef(null);
  const usageHorizontalMargingRef = useRef(null);
  const usageAllSidesMargingRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customMargingRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: marginRef, label: "margin Reference" },
        { ref: marginTopRef, label: "margin top Reference" },
        { ref: marginRightRef, label: "margin right Reference" },
        { ref: marginBottomRef, label: "margin bottom Reference" },
        { ref: marginLeftRef, label: "margin left Reference" },
        { ref: verticalMargingRef, label: "vertical margin Reference" },
        { ref: horizontalMargingRef, label: "horizontal margin Reference" },
      ],
    },
    {
      label: "Usage",
      ref: usageRef,
      subLabels: [
        { ref: usageMarginSingleSideRef, label: "margin: Single side" },
        { ref: usageVerticalMargingRef, label: "margin: Vertical" },
        { ref: usageHorizontalMargingRef, label: "margin: Horizontal" },
        { ref: usageAllSidesMargingRef, label: "margin: All Sides" },
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
      label: "Custom margin",
      ref: customMargingRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const marginReference = {
    className: "margin",
    tableRows: [
      {
        cssClass: "m-0",
        data: "0",
      },
      {
        cssClass: "m-px",
        data: "1px",
      },
      ...generateSpacingValues("m"),

      {
        cssClass: "m-auto",
        data: "auto",
      },
    ],
  };

  const marginTopReference = {
    className: "margin-top",
    tableRows: [
      {
        cssClass: "mt-0",
        data: "0",
      },
      {
        cssClass: "mt-px",
        data: "1px",
      },
      ...generateSpacingValues("mt"),
      {
        cssClass: "mt-auto",
        data: "auto",
      },
    ],
  };

  const marginRightReference = {
    className: "margin-right",
    tableRows: [
      {
        cssClass: "mr-0",
        data: "0",
      },
      {
        cssClass: "mr-px",
        data: "1px",
      },
      ...generateSpacingValues("mr"),
      {
        cssClass: "mr-auto",
        data: "auto",
      },
    ],
  };

  const marginBottomReference = {
    className: "margin-bottom",
    tableRows: [
      {
        cssClass: "mb-0",
        data: "0",
      },
      {
        cssClass: "mb-px",
        data: "1px",
      },
      ...generateSpacingValues("mb"),
      {
        cssClass: "mb-auto",
        data: "auto",
      },
    ],
  };

  const marginLeftReference = {
    className: "margin-left",
    tableRows: [
      {
        cssClass: "ml-0",
        data: "0",
      },
      {
        cssClass: "ml-px",
        data: "1px",
      },
      ...generateSpacingValues("ml"),
      {
        cssClass: "ml-auto",
        data: "auto",
      },
    ],
  };

  const verticalMargingReference = {
    className: "margin-top & margin-bottom",
    tableRows: [
      {
        cssClass: "my-0",
        data: "0",
      },
      {
        cssClass: "my-px",
        data: "1px",
      },
      ...generateSpacingValues("my"),
      {
        cssClass: "my-auto",
        data: "auto",
      },
    ],
  };

  const horizontalMargingReference = {
    className: "margin-left & margin-right",
    tableRows: [
      {
        cssClass: "mx-0",
        data: "0",
      },
      {
        cssClass: "mx-px",
        data: "1px",
      },
      ...generateSpacingValues("mx"),
      {
        cssClass: "mx-auto",
        data: "auto",
      },
    ],
  };

  const singleMarginCode = `
<div class="mt-6">This element has a top margin of 1.5rem.</div>
<div class="mr-4">This element has a right margin of 1rem.</div>
<div class="mb-8">This element has a bottom margin of 2rem.</div>
<div class="ml-2">This element has a left margin of 0.5rem.</div>
  `;

  const verticalmarginCode = `
  <div class="my-8">margin of 2rem on vertical sides</div>
  `;

  const horizontalmarginCode = `
  <div class="mx-4">margin of 1rem on horizontal sides</div>
  `;

  const allSidesmarginCode = `
  <div class="m-6">margin of 1.5rem on all sides</div>
  `;

  const hoverCode = `
<div
  class="m-0 hover-m-5..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="m-0 lg-m-5..."
 ...
></div>
`;

  const marginMap = `
    $margin-map: (
      0: 0,
      px: 1px,
      1: $base-margin,
      2: $base-margin * 2,
      3: $base-margin * 3,
      4: $base-margin * 4,
      5: $base-margin * 5,
      6: $base-margin * 6,
      7: $base-margin * 7,
      8: $base-margin * 8,
      9: $base-margin * 9,
      10: $base-margin * 10,
      11: $base-margin * 11,
      12: $base-margin * 12,
      14: $base-margin * 14,
      16: $base-margin * 16,
      18: $base-margin * 18,
      20: $base-margin * 20,
      24: $base-margin * 24,
      28: $base-margin * 28,
      32: $base-margin * 32,
      36: $base-margin * 36,
      40: $base-margin * 40,
      44: $base-margin * 44,
      48: $base-margin * 48,
      52: $base-margin * 52,
      56: $base-margin * 56,
      60: $base-margin * 60,
      64: $base-margin * 64,
      68: $base-margin * 68,
      72: $base-margin * 72,
      76: $base-margin * 76,
      80: $base-margin * 80,
      84: $base-margin * 84,
      88: $base-margin * 88,
      92: $base-margin * 92,
      96: $base-margin * 96,
      100: $base-margin * 100,
      auto: auto,
    ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$margin-map: map.set($margin-map, yourCustomUtility, itsValue);

// Note :
// $margin-y-map: vertical margin map (my-*); 
// $margin-x-map: horizontal margin map (mx-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$margin-map: map.set($margin-map, 5, itsValue);

// Note :
// $margin-y-map: vertical margin map (my-*); 
// $margin-x-map: horizontal margin map (mx-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="spacing"
          pageTitle="margin"
          pageDesc="Pre-built CSS classes for managing element margin"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="margin-reference"
            ref={marginRef}
          >
            margin Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={marginReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="margin-top-reference"
            ref={marginTopRef}
          >
            margin-top Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={marginTopReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="margin-right-reference"
            ref={marginRightRef}
          >
            margin-right Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={marginRightReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="margin-bottom-reference"
            ref={marginBottomRef}
          >
            margin-bottom Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={marginBottomReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="margin-left-reference"
            ref={marginLeftRef}
          >
            margin-left Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={marginLeftReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="vertical-margin-reference"
            ref={verticalMargingRef}
          >
            vertical-margin Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={verticalMargingReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="horizontal-margin-reference"
            ref={horizontalMargingRef}
          >
            horizontal-margin Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={horizontalMargingReference}
          />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <h3
            className="text-sm font-medium text-primary"
            id="margin-single-side"
            ref={usageMarginSingleSideRef}
          >
            margin: single Side
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use the &quot;<span className="text-primary">mt-*</span>&quot;,{" "}
            &quot;<span className="text-primary">mr-*</span>&quot;, &quot;
            <span className="text-primary">mb-*</span>&quot;, and &quot;
            <span className="text-primary">ml-*</span>&quot; classes to
            precisely adjust the margin on specific sides of an element.
          </p>
          <div className="text-light-periwinkle text-sm mt-3">
            <label>For instance :</label>
            <ul className="mt-2 ml-5">
              <li>
                <span className="text-primary">mt-6 :</span> Adds a margin of
                1.5rem to the top of the element.
              </li>
              <li>
                <span className="text-primary">mr-4 :</span> Adds a margin of
                1rem to the right of the element.
              </li>
              <li>
                <span className="text-primary">mb-8 :</span> Adds a margin of
                2rem to the bottom of the element.
              </li>
              <li>
                <span className="text-primary">ml-2 :</span> Adds a margin of
                0.5rem to the left of the element.
              </li>
            </ul>
          </div>
          <Code code={singleMarginCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="margin-vertical"
            ref={usageVerticalMargingRef}
          >
            margin: vertical
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;my-*&quot;</span> class
            to add margin to both vertical sides of an element (top and bottom).
          </p>
          <Code code={verticalmarginCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="margin-horizontal"
            ref={usageHorizontalMargingRef}
          >
            margin: horizontal
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;mx-*&quot;</span> class
            to add margin to both horizontal sides of an element (left and
            right).
          </p>
          <Code code={horizontalmarginCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="margin-all-sides"
            ref={usageAllSidesMargingRef}
          >
            margin: all sides
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;m-*&quot;</span> class
            to add margin to all sides of an element.
          </p>
          <Code code={allSidesmarginCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"m-5"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customMargingRef}
          utilitySassMap={utilitySassMap}
          utilityMap={marginMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"margin"}
        />
        <Footer prevPage={"padding"} nextPage={"width"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Margin;
