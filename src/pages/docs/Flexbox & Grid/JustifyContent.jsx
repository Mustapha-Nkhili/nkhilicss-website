import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const JustifyContent = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "justify-content",
    tableRows: [
      {
        cssClass: "justify-flex-start",
        data: "flex-start",
      },
      {
        cssClass: "justify-flex-end",
        data: "flex-end",
      },
      {
        cssClass: "justify-center",
        data: "center",
      },
      {
        cssClass: "justify-between",
        data: "space-between",
      },
      {
        cssClass: "justify-around",
        data: "space-around",
      },
      {
        cssClass: "justify-evenly",
        data: "space-evenly",
      },
      {
        cssClass: "justify-start",
        data: "start",
      },
      {
        cssClass: "justify-end",
        data: "end",
      },
      {
        cssClass: "justify-left",
        data: "left",
      },
      {
        cssClass: "justify-right",
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

  const justifyContentCode = `
<div class="flex justify-start">
  <!-- Flex container with items aligned to the start of the main axis -->
</div>
  `;

  const hoverCode = `
<div
  class="flex justify-left hover-justify-center ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="flex justify-left lg-justify-center ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="justify content"
          pageDesc="Pre-built CSS classes for controlling the positioning of flex and grid items along a container's main axis."
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
                <span className="text-primary">&quot;justify-*&quot;</span>{" "}
                classes for alignment along the main axis.
              </>
            }
          />
          <Code code={justifyContentCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"justify-center"}
        />
        <Footer prevPage={"gap"} nextPage={"justify items"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default JustifyContent;
