import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextDecorationStyle = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-decoration-style",
    tableRows: [
      {
        cssClass: "text-dec-solid",
        data: "solid",
      },
      {
        cssClass: "text-dec-double",
        data: "double",
      },
      {
        cssClass: "text-dec-dotted",
        data: "dotted",
      },
      {
        cssClass: "text-dec-dashed",
        data: "dashed",
      },
      {
        cssClass: "text-dec-wavy",
        data: "wavy",
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

  const textDecorationStyleCode = `
<p class="text-dec-dashed">
  This text has a dashed style decoration.
</p>
  `;

  const hoverCode = `
<p class="text-dec-dotted hover-text-dec-double ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="text-dec-dotted lg-text-dec-double ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text decoration style"
          pageDesc="Pre-built CSS classes to control the text decoration style of an element."
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
                <span className="text-primary">&quot;text-dec-*&quot;</span>
                classes for managing the text decoration style of an element.
              </>
            }
          />
          <Code code={textDecorationStyleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"text-dec-double"}
        />
        <Footer
          prevPage={"text decoration color"}
          nextPage={"text decoration thickness"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextDecorationStyle;
