import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const ListStyleType = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const listStyleTypeRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

  const cssClassesReference = {
    className: "list-style-type",
    tableRows: [
      {
        cssClass: "list-style-none",
        data: "none",
      },
      {
        cssClass: "list-style-disc",
        data: "disc",
      },
      {
        cssClass: "list-style-decimal",
        data: "decimal",
      },
      {
        cssClass: "list-style-circle",
        data: "circle",
      },
      {
        cssClass: "list-style-square",
        data: "square",
      },
      {
        cssClass: "list-style-georgian",
        data: "georgian",
      },
      {
        cssClass: "list-style-trad-chinese-informal",
        data: "trad-chinese-informal",
      },
      {
        cssClass: "list-style-kannada",
        data: "kannada",
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
      label: "Custom list style type",
      ref: listStyleTypeRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const listStyleTypeCode = `
<ul class="list-style-disc">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ul class="list-style-square">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
  `;

  const hoverCode = `
<ul class="list-style-square hover-list-style-disc ...">
  <li>...</li>
  ...
</ul>
`;

  const breakpointsCode = `
<ul class="list-style-square lg-list-style-disc ...">
  <li>...</li>
  ...
</ul>
`;

  const listStyleTypeMap = `
$list-style-type-map: (
    none: none,
    disc: disc,
    decimal: decimal,
    circle: circle,
    square: square,
    georgian: georgian,
    trad-chinese-informal: trad-chinese-informal,
    kannada: kannada,
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$list-style-type-map: map.set($list-style-type-map, yourCustomUtility, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/utilities-maps" as *;

$list-style-type-map: map.set($list-style-type-map, disc, itsValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="list style type"
          pageDesc="pre-built CSS classes to control the list style type of list items."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                <span className="text-primary">&quot;list-style-*&quot;</span>,
                classes for managing the list style type.
              </>
            }
          />
          <Code code={listStyleTypeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"list-style-disc"}
        />
        <CustomUtilitiesSection
          customUtilityRef={listStyleTypeRef}
          utilitySassMap={utilitySassMap}
          utilityMap={listStyleTypeMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"list style type"}
        />
        <Footer prevPage={"list style position"} nextPage={"text align"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default ListStyleType;
