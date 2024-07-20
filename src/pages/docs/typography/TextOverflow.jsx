import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextOverflow = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-overflow",
    tableRows: [
      {
        cssClass: "text-ellipsis",
        data: "ellipsis",
      },
      {
        cssClass: "text-clip",
        data: "clip",
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

  const textOverflowCode = `
<p class="text-ellipsis overflow-hidden w-52 white-space-nowrap">
   This is a long text that will be truncated with ellipsis.
</p>
  `;

  const hoverCode = `
<p class="text-clip overflow-hidden w-52 white-space-nowrap hover-text-ellipsis ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="text-clip overflow-hidden w-52 white-space-nowrap lg-text-ellipsis ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text overflow"
          pageDesc="Pre-built CSS classes to control the text overflow in an element."
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
                Utilize &quot;<span className="text-primary">text-*</span>
                &quot; classes for managing the text overflow in an element.
              </>
            }
          />
          <Code code={textOverflowCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-ellipsis"}
        />
        <Footer prevPage={"text transform"} nextPage={"text wrap"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextOverflow;
