import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const JustifyItems = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "justify-items",
    tableRows: [
      {
        cssClass: "justify-items-start",
        data: "start",
      },
      {
        cssClass: "justify-items-end",
        data: "end",
      },
      {
        cssClass: "justify-items-center",
        data: "center",
      },
      {
        cssClass: "justify-items-stretch",
        data: "stretch",
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

  const justifyItemsCode = `
<div class="grid justify-items-center">
<!-- Grid item centered along the inline axis -->
</div>
  `;

  const hoverCode = `
<div
  class="grid justify-items-end hover-justify-items-center ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="grid justify-items-end lg-justify-items-center ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="justify items"
          pageDesc="Pre-built CSS Classes for Inline Alignment of Grid Items."
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
                <span className="text-primary">&quot;justify-items-*&quot;</span>{" "}
                classes for Inline Alignment of Grid Items.
              </>
            }
          />
          <Code code={justifyItemsCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"justify-items-center"}
        />
        <Footer prevPage={"justify content"} nextPage={"justify self"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default JustifyItems;
