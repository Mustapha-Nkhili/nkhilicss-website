import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextDecorationLine = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-decoration-line",
    tableRows: [
      {
        cssClass: "text-dec-underline",
        data: "underline",
      },
      {
        cssClass: "text-dec-overline",
        data: "overline",
      },
      {
        cssClass: "text-dec-line-through",
        data: "line-through",
      },
      {
        cssClass: "text-dec-none",
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

  const textAlignCode = `
  <p class="text-dec-line-through">This text has a line-through.</p>
  `;

  const hoverCode = `
<p class="text-dec-underline hover-text-dec-overline ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="text-dec-underline lg-text-dec-overline ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text decoration line"
          pageDesc="Pre-built CSS classes to control the decoration of text."
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
              Utilize
                <span className="text-primary">&quot;text-dec-*&quot;</span>,
                classes to Control how text is decorated.
              </>
            }
          />
          <Code code={textAlignCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-dec-overline"}
        />
        <Footer prevPage={"text color"} nextPage={"text decoration color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextDecorationLine;
