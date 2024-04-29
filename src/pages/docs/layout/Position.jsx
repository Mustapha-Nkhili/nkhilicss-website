import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Position = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "position",
    tableRows: [
      {
        cssClass: "static",
        data: "static",
      },
      {
        cssClass: "fixed",
        data: "fixed",
      },
      {
        cssClass: "absolute",
        data: "absolute",
      },
      {
        cssClass: "relative",
        data: "relative",
      },
      {
        cssClass: "sticky",
        data: "sticky",
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

  const positionRelativeCode = `
<div class="relative...">
    Content here with relative positioning.
</div>
  `;

  const hoverCode = `
<div
  class="relative hover-absolute ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="relative lg-absolute ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="position"
          pageDesc="Pre-built CSS Classes for DOM Element Positioning."
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
                Utilize <span className="text-primary">&quot;relative, absolute, fixed ...&quot;</span>{" "}
                classes for precise element positioning.
              </>
            }
          />
          <Code code={positionRelativeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"absolute"}
        />
        <Footer prevPage={"float"} nextPage={"top bottom left right"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Position;
