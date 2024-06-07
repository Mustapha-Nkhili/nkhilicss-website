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

const Padding = () => {
  const quickReferenceRef = useRef(null);
  const paddingRef = useRef(null);
  const paddingTopRef = useRef(null);
  const paddingRightRef = useRef(null);
  const PaddingBottomRef = useRef(null);
  const PaddingLeftRef = useRef(null);
  const verticalPaddingRef = useRef(null);
  const horizontalPaddingRef = useRef(null);
  const usageRef = useRef(null);
  const usagePaddingSingleSideRef = useRef(null);
  const usageVerticalPaddingRef = useRef(null);
  const usageHorizontalPaddingRef = useRef(null);
  const usageAllSidesPaddingRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customePaddingRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: paddingRef, label: "padding Reference" },
        { ref: paddingTopRef, label: "padding top Reference" },
        { ref: paddingRightRef, label: "padding right Reference" },
        { ref: PaddingBottomRef, label: "padding bottom Reference" },
        { ref: PaddingLeftRef, label: "padding left Reference" },
        { ref: verticalPaddingRef, label: "vertical padding Reference" },
        { ref: horizontalPaddingRef, label: "horizontal padding Reference" },
      ],
    },
    {
      label: "Usage",
      ref: usageRef,
      subLabels: [
        { ref: usagePaddingSingleSideRef, label: "Padding: Single side" },
        { ref: usageVerticalPaddingRef, label: "Padding: Vertical" },
        { ref: usageHorizontalPaddingRef, label: "Padding: Horizontal" },
        { ref: usageAllSidesPaddingRef, label: "Padding: All Sides" },
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
      label: "Custom padding",
      ref: customePaddingRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const paddingReference = {
    className: "padding",
    tableRows: [
      {
        cssClass: "p-0",
        data: "0",
      },
      {
        cssClass: "p-px",
        data: "1px",
      },
      ...generateSpacingValues("p"),
    ],
  };

  const paddingTopReference = {
    className: "padding-top",
    tableRows: [
      {
        cssClass: "pt-0",
        data: "0",
      },
      {
        cssClass: "pt-px",
        data: "1px",
      },
      ...generateSpacingValues("pt"),
    ],
  };

  const paddingRightReference = {
    className: "padding-right",
    tableRows: [
      {
        cssClass: "pr-0",
        data: "0",
      },
      {
        cssClass: "pr-px",
        data: "1px",
      },
      ...generateSpacingValues("pr"),
    ],
  };

  const paddingBottomReference = {
    className: "padding-bottom",
    tableRows: [
      {
        cssClass: "pb-0",
        data: "0",
      },
      {
        cssClass: "pb-px",
        data: "1px",
      },
      ...generateSpacingValues("pb"),
    ],
  };

  const verticalPaddingReference = {
    className: "padding-top & padding-bottom",
    tableRows: [
      {
        cssClass: "py-0",
        data: "0",
      },
      {
        cssClass: "py-px",
        data: "1px",
      },
      ...generateSpacingValues("py"),
    ],
  };

  const horizontalPaddingReference = {
    className: "padding-left & padding-right",
    tableRows: [
      {
        cssClass: "px-0",
        data: "0",
      },
      {
        cssClass: "px-px",
        data: "1px",
      },
      ...generateSpacingValues("px"),
    ],
  };

  const paddingLeftReference = {
    className: "padding-left",
    tableRows: [
      {
        cssClass: "pl-0",
        data: "0",
      },
      {
        cssClass: "pl-px",
        data: "1px",
      },
      ...generateSpacingValues("pl"),
    ],
  };

  const singlepaddingCode = `
<div class="pt-6">This element has a top padding of 1.5rem.</div>
<div class="pr-4">This element has a right padding of 1rem.</div>
<div class="pb-8">This element has a bottom padding of 2rem.</div>
<div class="pl-2">This element has a left padding of 0.5rem.</div>
  `;

  const verticalPaddingCode = `
  <div class="py-8">Padding of 2rem on vertical sides</div>
  `;

  const horizontalPaddingCode = `
  <div class="px-4">Padding of 1rem on horizontal sides</div>
  `;

  const allSidesPaddingCode = `
  <div class="p-6">Padding of 1.5rem on all sides</div>
  `;

  const hoverCode = `
<div
  class="p-0 hover-p-5..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="p-0 lg-p-5..."
 ...
></div>
`;

  const paddingMap = `
    $padding-map: (
      0: 0,
      px: 1px,
      1: $base-spacing,
      2: $base-spacing * 2,
      3: $base-spacing * 3,
      4: $base-spacing * 4,
      5: $base-spacing * 5,
      6: $base-spacing * 6,
      7: $base-spacing * 7,
      8: $base-spacing * 8,
      9: $base-spacing * 9,
      10: $base-spacing * 10,
      11: $base-spacing * 11,
      12: $base-spacing * 12,
      14: $base-spacing * 14,
      16: $base-spacing * 16,
      18: $base-spacing * 18,
      20: $base-spacing * 20,
      24: $base-spacing * 24,
      28: $base-spacing * 28,
      32: $base-spacing * 32,
      36: $base-spacing * 36,
      40: $base-spacing * 40,
      44: $base-spacing * 44,
      48: $base-spacing * 48,
      52: $base-spacing * 52,
      56: $base-spacing * 56,
      60: $base-spacing * 60,
      64: $base-spacing * 64,
      68: $base-spacing * 68,
      72: $base-spacing * 72,
      76: $base-spacing * 76,
      80: $base-spacing * 80,
      84: $base-spacing * 84,
      88: $base-spacing * 88,
      92: $base-spacing * 92,
      96: $base-spacing * 96,
      100: $base-spacing * 100,
    ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$padding-map: map.set($padding-map, yourCustomUtility, itsValue);

// Note :
// $padding-y-map: vertical padding map (py-*); 
// $padding-x-map: horizontal padding map (px-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$padding-map: map.set($padding-map, 5, itsValue);

// Note :
// $padding-y-map: vertical padding map (py-*); 
// $padding-x-map: horizontal padding map (px-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="spacing"
          pageTitle="padding"
          pageDesc="Pre-built CSS classes for managing element padding"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <h3
            className="font-medium mt-5 text-light-periwinkle"
            id="padding-reference"
            ref={paddingRef}
          >
            padding Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={paddingReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="padding-top-reference"
            ref={paddingTopRef}
          >
            padding-top Reference
          </h3>
          <CssClassesReferenceTable cssClassesReference={paddingTopReference} />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="padding-right-reference"
            ref={paddingRightRef}
          >
            padding-right Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={paddingRightReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="padding-bottom-reference"
            ref={PaddingBottomRef}
          >
            padding-bottom Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={paddingBottomReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="padding-left-reference"
            ref={PaddingLeftRef}
          >
            padding-left Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={paddingLeftReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="vertical-padding-reference"
            ref={verticalPaddingRef}
          >
            vertical-padding Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={verticalPaddingReference}
          />
          <h3
            className="font-medium mt-32 text-light-periwinkle"
            id="horizontal-padding-reference"
            ref={horizontalPaddingRef}
          >
            horizontal-padding Reference
          </h3>
          <CssClassesReferenceTable
            cssClassesReference={horizontalPaddingReference}
          />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <h3
            className="text-sm font-medium text-primary"
            id="padding-single-side"
            ref={usagePaddingSingleSideRef}
          >
            Padding: single Side
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use the &quot;<span className="text-primary">pt-*</span>&quot;,{" "}
            &quot;<span className="text-primary">pr-*</span>&quot;, &quot;
            <span className="text-primary">pb-*</span>&quot;, and &quot;
            <span className="text-primary">pl-*</span>&quot; classes to
            precisely adjust the padding on specific sides of an element.
          </p>
          <div className="text-light-periwinkle text-sm mt-3">
            <label>For instance :</label>
            <ul className="mt-2 ml-5">
              <li>
                <span className="text-primary">pt-6 :</span> Adds a padding of
                1.5rem to the top of the element.
              </li>
              <li>
                <span className="text-primary">pr-4 :</span> Adds a padding of
                1rem to the right of the element.
              </li>
              <li>
                <span className="text-primary">pb-8 :</span> Adds a padding of
                2rem to the bottom of the element.
              </li>
              <li>
                <span className="text-primary">pl-2 :</span> Adds a padding of
                0.5rem to the left of the element.
              </li>
            </ul>
          </div>
          <Code code={singlepaddingCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="padding-vertical"
            ref={usageVerticalPaddingRef}
          >
            Padding: vertical
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;py-*&quot;</span> class
            to add padding to both vertical sides of an element (top and
            bottom).
          </p>
          <Code code={verticalPaddingCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="padding-horizontal"
            ref={usageHorizontalPaddingRef}
          >
            Padding: horizontal
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;px-*&quot;</span> class
            to add padding to both horizontal sides of an element (left and
            right).
          </p>
          <Code code={horizontalPaddingCode} language="html" />
          <h3
            className="text-sm font-medium text-primary"
            id="padding-all-sides"
            ref={usageAllSidesPaddingRef}
          >
            Padding: all sides
          </h3>
          <p className="text-light-periwinkle text-sm mt-2">
            Use The <span className="text-primary">&quot;p-*&quot;</span> class
            to add padding to all sides of an element.
          </p>
          <Code code={allSidesPaddingCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"p-5"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customePaddingRef}
          utilitySassMap={utilitySassMap}
          utilityMap={paddingMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"padding"}
        />
        <Footer prevPage={"place self"} nextPage={"margin"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Padding;
