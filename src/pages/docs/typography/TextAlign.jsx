import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextAlign = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-align",
    tableRows: [
      {
        cssClass: "text-left",
        data: "left",
      },
      {
        cssClass: "text-center",
        data: "center",
      },
      {
        cssClass: "text-right",
        data: "right",
      },
      {
        cssClass: "text-justify",
        data: "justify",
      },
      {
        cssClass: "text-start",
        data: "start",
      },
      {
        cssClass: "text-end",
        data: "end",
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
<p class="text-left">
  <!-- Text aligned to the left -->
</p>
  `;

  const hoverCode = `
<p class="text-left hover-text-center ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="text-left lg-text-center ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text align"
          pageDesc="Pre-built CSS classes to control the text alignment of an element."
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
                <span className="text-primary">&quot;text-*&quot;</span>,
                classes for managing the text alignment.
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
          utility={"text-center"}
        />
        <Footer prevPage={"list style type"} nextPage={"text color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextAlign;
