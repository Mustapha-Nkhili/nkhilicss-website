import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const AlignItems = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "align-items",
    tableRows: [
      {
        cssClass: "items-flex-start",
        data: "flex-start",
      },
      {
        cssClass: "items-flex-end",
        data: "flex-end",
      },
      {
        cssClass: "items-normal",
        data: "normal",
      },
      {
        cssClass: "items-stretch",
        data: "stretch",
      },
      {
        cssClass: "items-center",
        data: "center",
      },
      {
        cssClass: "items-start",
        data: "start",
      },
      {
        cssClass: "items-end",
        data: "end",
      },
      {
        cssClass: "items-baseline",
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

  const alignItemsCode = `
<div class="flex items-center">
    <!-- Flex container with items centered along the cross axis -->
    Centered Items
</div>
  `;

  const hoverCode = `
<div class="flex items-start hover-items-center">
   ...
</div>
`;

  const breakpointsCode = `
<div class="flex items-start lg-items-center">
   ...
</div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="align items"
          pageDesc="Pre-built CSS classes for managing the alignment of items within flex and grid containers."
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
                <span className="text-primary">&quot;items-* &quot;</span>{" "}
                classes for aligning items along the cross axis of a container.
              </>
            }
          />
          <Code code={alignItemsCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"items-center"}
        />
        <Footer prevPage={"align content"} nextPage={"align self"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default AlignItems;
