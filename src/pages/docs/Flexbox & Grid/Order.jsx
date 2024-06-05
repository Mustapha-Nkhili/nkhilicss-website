import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Order = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const orderRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "order",
    tableRows: [
      { cssClass: `order-first`, data: "-999" },
      { cssClass: `order-0`, data: "0" },
      { cssClass: `order-1`, data: "1" },
      { cssClass: `order-2`, data: "2" },
      { cssClass: `order-3`, data: "3" },
      { cssClass: `order-4`, data: "4" },
      { cssClass: `order-5`, data: "5" },
      { cssClass: `order-6`, data: "6" },
      { cssClass: `order-7`, data: "7" },
      { cssClass: `order-8`, data: "8" },
      { cssClass: `order-9`, data: "9" },
      { cssClass: `order-10`, data: "10" },
      { cssClass: `order-last`, data: "999" },
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
      label: "Custom order",
      ref: orderRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const flexBasisCode = `
<div class="order-5 ..."></div>
  `;

  const hoverCode = `
<div
  class="order-5 hover-order-10 ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="order-5 lg-order-10 ..."
 ...
></div>
`;

  const orderMap = `
  $order-map: (
    first: -999,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    last: 999,
  ) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$order-map: map.set($order-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/partials/_utilities-maps" as *;

$order-map: map.set($order-map, last, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="order"
          pageDesc="Pre-built CSS classes for managing the sequence of flex and grid items."
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
                Utilize {" "}
                <span className="text-primary">&quot;order-*&quot;</span> properties to
                control the order of flex items.
              </>
            }
          />
          <Code code={flexBasisCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"order-10"}
        />
        <CustomUtilitiesSection
          customUtilityRef={orderRef}
          utilitySassMap={utilitySassMap}
          utilityMap={orderMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"order"}
        />
        <Footer prevPage={"flex shrink"} nextPage={"gap"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Order;
