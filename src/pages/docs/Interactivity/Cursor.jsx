import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import CustomUtilitiesSection from "../../../components/docs/CustomUtilitiesSection";

const Cursor = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);
  const customeCursorRef = useRef(null);
  const utilitySassMap = useRef(null);
  const addUtilityToSassMapRef = useRef(null);
  const changeUtilityValueRef = useRef(null);

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
      label: "Custom cursor",
      ref: customeCursorRef,
      subLabels: [
        { ref: utilitySassMap, label: "Utility Sass Map" },
        { ref: addUtilityToSassMapRef, label: "Add utility to Sass Map" },
        { ref: changeUtilityValueRef, label: "Change utility value" },
      ],
    },
  ];

  const cssClassesReference = {
    className: "cursor",
    tableRows: [
      {
        cssClass: "cursor-auto",
        data: <div className="cursor-auto">auto</div>,
      },
      {
        cssClass: "cursor",
        data: <div className="cursor">default</div>,
      },
      {
        cssClass: "cursor-pointer",
        data: <div className="cursor-pointer">pointer</div>,
      },
      {
        cssClass: "cursor-wait",
        data: <div className="cursor-wait">wait</div>,
      },
      {
        cssClass: "cursor-text",
        data: <div className="cursor-text">text</div>,
      },
      {
        cssClass: "cursor-move",
        data: <div className="cursor-move">move</div>,
      },
      {
        cssClass: "cursor-not-allowed",
        data: <div className="cursor-not-allowed">not-allowed</div>,
      },
      {
        cssClass: "cursor-none",
        data: <div className="cursor-none">none</div>,
      },
      {
        cssClass: "cursor-context-menu",
        data: <div className="cursor-context-menu">context-menu</div>,
      },
      {
        cssClass: "cursor-progress",
        data: <div className="cursor-progress">progress</div>,
      },
      {
        cssClass: "cursor-cell",
        data: <div className="cursor-cell">cell</div>,
      },
      {
        cssClass: "cursor-crosshair",
        data: <div className="cursor-crosshair">crosshair</div>,
      },
      {
        cssClass: "cursor-vertical-text",
        data: <div className="cursor-vertical-text">vertical-text</div>,
      },
      {
        cssClass: "cursor-alias",
        data: <div className="cursor-alias">alias</div>,
      },
      {
        cssClass: "cursor-copy",
        data: <div className="cursor-copy">copy</div>,
      },
      {
        cssClass: "cursor-no-drop",
        data: <div className="cursor-no-drop">no-drop</div>,
      },
      {
        cssClass: "cursor-grab",
        data: <div className="cursor-grab">grab</div>,
      },
      {
        cssClass: "cursor-grabbing",
        data: <div className="cursor-grabbing">grabbing</div>,
      },
      {
        cssClass: "cursor-all-scroll",
        data: <div className="cursor-all-scroll">all-scroll</div>,
      },
      {
        cssClass: "cursor-zoom-in",
        data: <div className="cursor-zoom-in">zoom-in</div>,
      },
      {
        cssClass: "cursor-zoom-out",
        data: <div className="cursor-zoom-out">zoom-out</div>,
      },
    ],
  };

  const cursorCode = `
<div class="cursor-zoom-in ..."></div>
  `;

  const hoverCode = `
<div
  class="cursor-all-scroll hover-cursor-grab..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="cursor-all-scroll lg-cursor-grab..."
 ...
></div>
`;

  const cursorMap = `
$cursor-map: (
  auto: auto,
  default: default,
  pointer: pointer,
  wait: wait,
  text: text,
  move: move,
  not-allowed: not-allowed,
  none: none,
  context-menu: context-menu,
  progress: progress,
  cell: cell,
  crosshair: crosshair,
  vertical-text: vertical-text,
  alias: alias,
  copy: copy,
  no-drop: no-drop,
  grab: grab,
  grabbing: grabbing,
  all-scroll: all-scroll,
  zoom-in: zoom-in,
  zoom-out: zoom-out
) !default;
`;

  const addUtilityCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/_utilities-maps" as *;

$cursor-map: map.set($cursor-map, yourCustomUtility, itsValue));

@use "../node_modules/nkhilicss/sass/index";
`;

  const changeUtilityValueCode = `
@use "sass:map";
@use "../node_modules/nkhilicss/sass/utils/_utilities-maps" as *;

$cursor-map: map.set($cursor-map, default, yourCustomValue);

@use "../node_modules/nkhilicss/sass/index";
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="cursor"
          pageDesc="Pre-built CSS Classes to specify which cursor is displayed when hovering over an element."
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
                Utilize the{" "}
                <span className="text-primary">&quot;cursor-*&quot;</span>,{" "}
                classes to specify the cursor style when hovering over an element.
              </>
            }
          />
          <Code code={cursorCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"cursor-grab"}
        />
        <CustomUtilitiesSection
          customUtilityRef={customeCursorRef}
          utilitySassMap={utilitySassMap}
          utilityMap={cursorMap}
          addUtilityToSassMapRef={addUtilityToSassMapRef}
          addUtilityCode={addUtilityCode}
          changeUtilityValueRef={changeUtilityValueRef}
          changeUtilityValueCode={changeUtilityValueCode}
          utility={"cursor"}
        />
        <Footer prevPage={"appearance"} nextPage={"caret color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Cursor;
