import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import { generateBorderWidthValues } from "../../../utils";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const BorderWidth = () => {
  const quickReferenceRef = useRef(null);
  const borderWidthRef = useRef(null);
  const borderWidthTopRef = useRef(null);
  const borderWidthRightRef = useRef(null);
  const borderWidthBottomRef = useRef(null);
  const borderWidthLeftRef = useRef(null);
  const verticalBorderWidthRef = useRef(null);
  const horizontalBorderWidthRef = useRef(null);
  const usageRef = useRef(null);
  const usageBorderWidthSingleSideRef = useRef(null);
  const usageVerticalBorderWidthRef = useRef(null);
  const usageHorizontalBorderWidthRef = useRef(null);
  const usageAllSidesBorderWidthRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeBorderWidthRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: borderWidthRef, label: "border width Reference" },
        { ref: borderWidthTopRef, label: "border width top Reference" },
        { ref: borderWidthRightRef, label: "border width right Reference" },
        { ref: borderWidthBottomRef, label: "border width bottom Reference" },
        { ref: borderWidthLeftRef, label: "border width left Reference" },
        {
          ref: verticalBorderWidthRef,
          label: "vertical border width Reference",
        },
        {
          ref: horizontalBorderWidthRef,
          label: "horizontal border width Reference",
        },
      ],
    },
    {
      label: "Usage",
      ref: usageRef,
      subLabels: [
        {
          ref: usageBorderWidthSingleSideRef,
          label: "border width: Single side",
        },
        { ref: usageVerticalBorderWidthRef, label: "border width: Vertical" },
        {
          ref: usageHorizontalBorderWidthRef,
          label: "border width: Horizontal",
        },
        { ref: usageAllSidesBorderWidthRef, label: "border width: All Sides" },
      ],
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
      label: "Custom border width",
      ref: customeBorderWidthRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const borderWidthReference = {
    className: "border-width",
    tableRows: generateBorderWidthValues("border"),
  };

  const borderWidthTopReference = {
    className: "border-top-width",
    tableRows: generateBorderWidthValues("border-t"),
  };

  const borderWidthRightReference = {
    className: "border-right-width",
    tableRows: generateBorderWidthValues("border-r"),
  };

  const borderWidthBottomReference = {
    className: "border-bottom-width",
    tableRows: generateBorderWidthValues("border-b"),
  };

  const borderWidthLeftReference = {
    className: "border-left-width",
    tableRows: generateBorderWidthValues("border-l"),
  };

  const horizontalBorderWidthReference = {
    className: "border-left-width & border-right-width",
    tableRows: generateBorderWidthValues("border-x"),
  };

  const verticalBorderWidthReference = {
    className: "border-top-width & border-bottom-width",
    tableRows: generateBorderWidthValues("border-y"),
  };

  const singleBorderWidthCode = `
<div class="border-t-6">This element has a top border width of 6px.</div>
<div class="border-r-4">This element has a right border width of 4px.</div>
<div class="border-b-8">This element has a bottom border width of 8px.</div>
<div class="border-l-2">This element has a left border width of 2px.</div>
  `;

  const verticalBorderWidthCode = `
  <div class="border-y-8">border width of 8px on vertical sides</div>
  `;

  const horizontalBorderWidthCode = `
  <div class="border-x-4">border width of 4px on horizontal sides</div>
  `;

  const allSidesBorderWidthCode = `
  <div class="border-6">border width of 6px on all sides</div>
  `;

  const hoverCode = `
<div
  class="border-0 hover-border-5..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="border-0 lg-border-5..."
 ...
></div>
`;

  const borderWidthMap = `
$border-width-map: (
  none: 0px,
  default: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px,
  6: 6px,
  7: 7px,
  8: 8px,
  9: 9px,
  10: 10px,
  11: 11px,
  12: 12px,
  13: 13px,
  14: 14px,
  15: 15px,
  16: 16px,
  17: 17px,
  18: 18px,
  19: 19px,
  20: 20px,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/_utilities-maps" as *;

$border-width-map: map.set($border-width-map, yourCustomUtility, itsValue);

// Note :
// $border-width-y-map: vertical border width map (border-y-*); 
// $border-width-x-map: horizontal border width map (border-x-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/_utilities-maps" as *;

$border-width-map: map.set($border-width-map, 5, itsValue);

// Note :
// $border-width-y-map: vertical border width map (border-y-*); 
// $border-width-x-map: horizontal border width map (border-x-*);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="border width"
          pageDesc="Pre-built CSS classes for managing element border width"
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <div
            id="border-width-reference"
            ref={borderWidthRef}
            className="docs-section"
          >
            <h3 className="font-medium mt-5 text-light-periwinkle">
              border width Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={borderWidthReference}
            />
          </div>
          <div
            id="border-width-top-reference"
            ref={borderWidthTopRef}
            className="docs-section"
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              border width top Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={borderWidthTopReference}
            />
          </div>
          <div
            id="border-width-right-reference"
            ref={borderWidthRightRef}
            className="docs-section"
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              border Width right Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={borderWidthRightReference}
            />
          </div>
          <div
            id="border-width-bottom-reference"
            ref={borderWidthBottomRef}
            className="docs-section"
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              border Width bottom Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={borderWidthBottomReference}
            />
          </div>
          <div
            className="docs-section"
            id="border-width-left-reference"
            ref={borderWidthLeftRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              border width left Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={borderWidthLeftReference}
            />
          </div>
          <div
            className="docs-section"
            id="vertical-border-width-reference"
            ref={verticalBorderWidthRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              vertical border width Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={verticalBorderWidthReference}
            />
          </div>
          <div
            className="docs-section"
            id="horizontal-border-width-reference"
            ref={horizontalBorderWidthRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              horizontal border width Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={horizontalBorderWidthReference}
            />
          </div>
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <div
            className="docs-section"
            id="border-width-single-side"
            ref={usageBorderWidthSingleSideRef}
          >
            <h3 className="text-sm font-medium text-primary">
              border width: single Side
            </h3>
            <p className="text-light-periwinkle text-sm mt-2">
              Use the &quot;<span className="text-primary">border-t-*</span>
              &quot;, &quot;<span className="text-primary">border-r-*</span>
              &quot;, &quot;
              <span className="text-primary">border-b-*</span>&quot;, and &quot;
              <span className="text-primary">border-l-*</span>&quot; classes to
              precisely adjust the border Width on specific sides of an element.
            </p>
            <div className="text-light-periwinkle text-sm mt-3">
              <label>For instance :</label>
              <ul className="mt-2 ml-5">
                <li>
                  <span className="text-primary">border-t-6 :</span> Adds a
                  border width of 6px to the top of the element.
                </li>
                <li>
                  <span className="text-primary">border-r-4 :</span> Adds a
                  border width of 4px to the right of the element.
                </li>
                <li>
                  <span className="text-primary">border-b-8 :</span> Adds a
                  border width of 8px to the bottom of the element.
                </li>
                <li>
                  <span className="text-primary">border-l-2 :</span> Adds a
                  border width of 2px to the left of the element.
                </li>
              </ul>
            </div>
            <Code code={singleBorderWidthCode} language="html" />
          </div>
          <div
            className="docs-section"
            id="border-width-vertical"
            ref={usageVerticalBorderWidthRef}
          >
            <h3 className="text-sm font-medium text-primary">
              border width: vertical
            </h3>
            <p className="text-light-periwinkle text-sm mt-2">
              Use The{" "}
              <span className="text-primary">&quot;border-y-*&quot;</span> class
              to add border width to both vertical sides of an element (top and
              bottom).
            </p>
            <Code code={verticalBorderWidthCode} language="html" />
          </div>
          <div
            className="docs-section"
            id="border-width-horizontal"
            ref={usageHorizontalBorderWidthRef}
          >
            <h3 className="text-sm font-medium text-primary">
              border width: horizontal
            </h3>
            <p className="text-light-periwinkle text-sm mt-2">
              Use The{" "}
              <span className="text-primary">&quot;border-x-*&quot;</span> class
              to add border width to both horizontal sides of an element (left
              and right).
            </p>
            <Code code={horizontalBorderWidthCode} language="html" />
          </div>
          <div
            className="docs-section"
            id="border-width-all-sides"
            ref={usageAllSidesBorderWidthRef}
          >
            <h3 className="text-sm font-medium text-primary">
              border width: all sides
            </h3>
            <p className="text-light-periwinkle text-sm mt-2">
              Use The <span className="text-primary">&quot;border-*&quot;</span>{" "}
              class to add border width to all sides of an element.
            </p>
            <Code code={allSidesBorderWidthCode} language="html" />
          </div>
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"border-5"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeBorderWidthRef}
          utilitySassMap={utilitySassMap}
          utilityMap={borderWidthMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"border width"}
        />
        <Footer prevPage={"border radius"} nextPage={"border color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BorderWidth;
