import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const WhiteSpace = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "white-space",
    tableRows: [
      {
        cssClass: "whitespace-normal",
        data: "normal",
      },
      {
        cssClass: "whitespace-nowrap",
        data: "nowrap",
      },
      {
        cssClass: "whitespace-pre",
        data: "pre",
      },
      {
        cssClass: "whitespace-pre-wrap",
        data: "pre-wrap",
      },
      {
        cssClass: "whitespace-break-spaces",
        data: "break-spaces",
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

  const whiteSpaceCode = `
<p class="whitespace-pre w-52">This is a long text that will only wrap on newline characters.</p>
  `;

  const hoverCode = `
<p class="whitespace-nowrap hover-whitespace-pre-wrap ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="whitespace-nowrap lg-whitespace-pre-wrap ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="white space"
          pageDesc="Pre-Built CSS Classes to control the text wrapping behavior of an element."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize &quot;<span className="text-primary">whitespace-*</span>
                &quot; to control the text wrapping.
              </>
            }
          />
          <Code code={whiteSpaceCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"whitespace-pre-wrap"}
        />
        <Footer prevPage={"text indent"} nextPage={"hyphens"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default WhiteSpace;
