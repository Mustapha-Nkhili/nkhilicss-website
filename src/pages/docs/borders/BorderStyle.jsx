import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BorderStyle = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "border-style",
    tableRows: [
      {
        cssClass: "border-solid",
        data: "solid",
      },
      {
        cssClass: "border-dashed",
        data: "dashed",
      },
      {
        cssClass: "border-dotted",
        data: "dotted",
      },
      {
        cssClass: "border-double",
        data: "double",
      },
      {
        cssClass: "border-hidden",
        data: "hidden",
      },
      {
        cssClass: "border-none",
        data: "none",
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
  ];

  const borderStyleCode = `
<div class="border-solid border-2 border-gray p-4">
  This div has a solid border.
</div>
  `;

  const hoverCode = `
<div
  class="border-solid hover-border-hidden ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="border-solid lg-border-hidden ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="border style"
          pageDesc="Pre-built CSS classes for controlling the style of an element's borders."
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
                Utilize{" "}
                <span className="text-primary">&quot;border-*&quot;</span>{" "}
                classes to specify whether the border should be solid, dashed,
                dotted, double, hidden, or none.
              </>
            }
          />
          <Code code={borderStyleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"border-hidden"}
        />
        <Footer prevPage={"border color"} nextPage={"border collapse"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BorderStyle;
