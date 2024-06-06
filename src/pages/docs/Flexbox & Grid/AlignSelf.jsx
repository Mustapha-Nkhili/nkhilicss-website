import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const AlignSelf = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "align-self",
    tableRows: [
      {
        cssClass: "align-self-auto",
        data: "auto",
      },
      {
        cssClass: "align-self-stretch",
        data: "stretch",
      },
      {
        cssClass: "align-self-center",
        data: "center",
      },
      {
        cssClass: "align-self-start",
        data: "start",
      },
      {
        cssClass: "align-self-end",
        data: "end",
      },
      {
        cssClass: "align-self-baseline",
        data: "baseline",
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

  const alignSelfCode = `
<div class="flex">
...
  <div class="align-self-start">
    <!-- Flex item aligned to the start of the cross axis -->
  </div>
...
</div>
  `;

  const hoverCode = `
<div class="flex">
...
  <div class="align-self-start hover-align-self-end"></div>
...
</div>
`;

  const breakpointsCode = `
<div class="flex">
...
  <div class="align-self-start lg-align-self-end"></div>
...
</div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="align self"
          pageDesc="Pre-built CSS classes for controlling the alignment of individual items within flex and grid containers."
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
                <span className="text-primary">&quot;align-self-* &quot;</span>{" "}
                classes for aligning individual items along the cross axis
                within a container.
              </>
            }
          />
          <Code code={alignSelfCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"align-self-end"}
        />
        <Footer prevPage={"align items"} nextPage={"place content"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default AlignSelf;
