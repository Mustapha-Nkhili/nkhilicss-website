import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const FlexWrap = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "flex-wrap",
    tableRows: [
      {
        cssClass: "flex-wrap",
        data: "wrap",
      },
      {
        cssClass: "flex-wrap-reverse",
        data: "wrap-reverse",
      },
      {
        cssClass: "flex-nowrap",
        data: "nowrap",
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

  const flexWrapCode = `
<div class="flex-wrap...">
    <!-- Flex items will wrap onto multiple lines -->
</div>
  `;

  const hoverCode = `
<div
  class="flex-wrap hover-flex-nowrap ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="flex-wrap lg-flex-nowrap ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="flex wrap"
          pageDesc="Pre-built CSS Classes for Controlling Flex Item Wrapping"
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
                <span className="text-primary">&quot;flex-nowrap&quot;</span>,{" "}
                <span className="text-primary">&quot;flex-wrap&quot;</span>, and{" "}
                <span className="text-primary">
                  &quot;flex-wrap-reverse&quot;
                </span>{" "}
                classes for precise control over how flex items wrap.
              </>
            }
          />
          <Code code={flexWrapCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"flex-nowrap"}
        />
        <Footer prevPage={"flex direction"} nextPage={"flex"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FlexWrap;
