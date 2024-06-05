import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const FlexDirection = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "flex-direction",
    tableRows: [
      {
        cssClass: "flex-row",
        data: "row",
      },
      {
        cssClass: "flex-row-reverse",
        data: "row-reverse",
      },
      {
        cssClass: "flex-column",
        data: "column",
      },
      {
        cssClass: "flex-column-reverse",
        data: "column-reverse",
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

  const flexDirectionCode = `
<div class="flex-column...">
    <!-- Flex items will be arranged in a column -->
</div>
  `;

  const hoverCode = `
<div
  class="flex-row hover-flex-column ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="flex-row lg-flex-column ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="flex direction"
          pageDesc="Pre-built CSS Classes for Controlling the Direction of Flex Items"
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
                <span className="text-primary">&quot;flex-row&quot;</span>,{" "}
                <span className="text-primary">
                  &quot;flex-row-reverse&quot;
                </span>
                , <span className="text-primary">&quot;flex-column&quot;</span>,
                and{" "}
                <span className="text-primary">
                  &quot;flex-column-reverse&quot;
                </span>{" "}
                classes for precise control over flex item direction.
              </>
            }
          />
          <Code code={flexDirectionCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"flex-column"}
        />
        <Footer prevPage={"flex basis"} nextPage={"flex wrap"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FlexDirection;
