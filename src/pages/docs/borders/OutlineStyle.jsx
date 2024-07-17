import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const OutlineStyle = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "outline-style",
    tableRows: [
      {
        cssClass: "outline-solid",
        data: "solid",
      },
      {
        cssClass: "outline-dashed",
        data: "dashed",
      },
      {
        cssClass: "outline-dotted",
        data: "dotted",
      },
      {
        cssClass: "outline-double",
        data: "double",
      },
      {
        cssClass: "outline-hidden",
        data: "hidden",
      },
      {
        cssClass: "outline-auto",
        data: "auto",
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
  ];

  const outlineStyleCode = `
<div class="outline-solid outline-2 outline-gray p-4">
  This div has a solid outline.
</div>
  `;

  const hoverCode = `
<div
  class="outline-solid hover-outline-hidden ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="outline-solid lg-outline-hidden ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="outline style"
          pageDesc="Pre-built CSS classes for controlling the style of an element's outlines."
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
                Utilize{" "}
                <span className="text-primary">&quot;outline-*&quot;</span>{" "}
                classes to specify whether the outline should be solid, dashed,
                dotted, double, hidden, or auto.
              </>
            }
          />
          <Code code={outlineStyleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"outline-hidden"}
        />
        <Footer prevPage={"outline color"} nextPage={"outline offset"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default OutlineStyle;
