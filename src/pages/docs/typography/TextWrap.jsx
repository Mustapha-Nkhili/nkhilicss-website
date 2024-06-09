import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextWrap = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-wrap",
    tableRows: [
      {
        cssClass: "text-wrap",
        data: "wrap",
      },
      {
        cssClass: "text-nowrap",
        data: "nowrap",
      },
      {
        cssClass: "text-balance",
        data: "balance",
      },
      {
        cssClass: "text-pretty",
        data: "pretty",
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

  const textWrapCode = `
<p class="text-wrap"></p>
  `;

  const hoverCode = `
<p class="text-nowrap hover-text-balance ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="text-nowrap lg-text-balance ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text wrap"
          pageDesc="Pre-Built CSS Classes for Text Wrapping."
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
                Utilize &quot;<span className="text-primary">text-*</span>
                &quot; classes for Text Wrapping.
              </>
            }
          />
          <Code code={textWrapCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-balance"}
        />
        <Footer prevPage={"text overflow"} nextPage={"text indent"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextWrap;
