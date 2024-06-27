import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Resize = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "resize",
    tableRows: [
      {
        cssClass: "resize-none",
        data: "none",
      },
      {
        cssClass: "resize-y",
        data: "vertical",
      },
      {
        cssClass: "resize-x",
        data: "horizontal",
      },
      {
        cssClass: "resize",
        data: "both",
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

  const resizeCode = `
<div class="resize"></div>
  `;

  const hoverCode = `
<div
  class="resize-none hover-resize-y ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="resize-none lg-resize-y ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="resize"
          pageDesc="Pre-built CSS classes for controlling how an element can be resized"
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
                <span className="text-primary">&quot;resize-*&quot;</span>{" "}
                classes to make an element resizable or prevent it from being resizable.
              </>
            }
          />
          <Code code={resizeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"resize-y"}
        />
        <Footer prevPage={"pointer events"} nextPage={"user select"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Resize;
