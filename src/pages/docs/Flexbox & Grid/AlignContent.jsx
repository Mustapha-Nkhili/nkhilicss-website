import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const AlignContent = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "align-content",
    tableRows: [
      {
        cssClass: "content-normal",
        data: "normal",
      },
      {
        cssClass: "content-flex-start",
        data: "flex-start",
      },
      {
        cssClass: "content-flex-end",
        data: "flex-end",
      },
      {
        cssClass: "content-center",
        data: "center",
      },
      {
        cssClass: "content-between",
        data: "space-between",
      },
      {
        cssClass: "content-around",
        data: "space-around",
      },
      {
        cssClass: "content-evenly",
        data: "space-evenly",
      },
      {
        cssClass: "content-start",
        data: "start",
      },
      {
        cssClass: "content-end",
        data: "end",
      },
      {
        cssClass: "content-left",
        data: "left",
      },
      {
        cssClass: "content-right",
        data: "right",
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

  const alignContentCode = `
<div class="grid content-start">
  <!-- Grid container with content aligned to the start of the cross axis -->
</div>
  `;

  const hoverCode = `
<div
  class="grid content-left hover-content-center ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="grid content-left lg-content-center ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="align content"
          pageDesc="Pre-built CSS classes for managing the positioning of rows in multi-row flex and grid containers."
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
                <span className="text-primary">&quot;content-*&quot;</span>{" "}
                classes to control how the space between and around content
                items along the cross axis (column axis) of a grid container is
                distributed using the &quot;align-content&quot; property.
              </>
            }
          />
          <Code code={alignContentCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"content-center"}
        />
        <Footer prevPage={"justify self"} nextPage={"align items"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default AlignContent;
