import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const WillChange = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "will-change",
    tableRows: [
      {
        cssClass: "will-change-scroll",
        data: "scroll-position",
      },
      {
        cssClass: "will-change-contents",
        data: "contents",
      },
      {
        cssClass: "will-change-transform",
        data: "transform",
      },
      {
        cssClass: "will-change-auto",
        data: "auto",
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

  const willChangeCode = `
<div class="will-change-auto"></div>
  `;

  const hoverCode = `
<div
  class="will-change-transform hover-will-change-contents ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="will-change-transform lg-will-change-contents ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="will change"
          pageDesc="Pre-built CSS classes for optimizing upcoming animations of elements that are expected to change."
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
                <span className="text-primary">&quot;will-change-*&quot;</span>{" "}
                classes to optimiz the upcoming animations of elements.
              </>
            }
          />
          <Code code={willChangeCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"will-change-contents"}
        />
        <Footer prevPage={"user select"} 
        // nextPage={"will change"} 
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default WillChange;
