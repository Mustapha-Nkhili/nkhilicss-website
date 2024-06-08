import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const FontStyle = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "font-style",
    tableRows: [
      {
        cssClass: "font-style-italic",
        data: "italic",
      },
      {
        cssClass: "font-style-normal",
        data: "normal",
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

  const fontStyleCode = `
<div class="font-style-italic">This text is italicized.</div>
  `;

  const hoverCode = `
<div
  class="font-style-normal hover-font-style-italic ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="font-style-normal lg-font-style-italic ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="font style"
          pageDesc="Pre-built CSS classes for managing font style."
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
                <span className="text-primary">&quot;font-style-*&quot;</span>,
                classes for precise element visibility control.
              </>
            }
          />
          <Code code={fontStyleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"font-style-italic"}
        />
        <Footer prevPage={"font size"} nextPage={"font weight"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default FontStyle;
