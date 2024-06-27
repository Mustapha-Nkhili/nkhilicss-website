import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const ScrollBehavior = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "scroll-behavior",
    tableRows: [
      {
        cssClass: "scroll-auto",
        data: "auto",
      },
      {
        cssClass: "scroll-smooth",
        data: "smooth",
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

  const scrollBehaviorCode = `
<div class="scroll-auto"></div>
  `;

  const hoverCode = `
<div
  class="scroll-auto hover-scroll-smooth ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="scroll-auto lg-scroll-smooth ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="scroll behavior"
          pageDesc="Pre-built CSS classes for controlling the scroll behavior of an element."
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
                <span className="text-primary">&quot;scroll-smooth&quot;</span>{" "} class
                to enable smooth scrolling.
              </>
            }
          />
          <Code code={scrollBehaviorCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"scroll-smooth"}
        />
        <Footer prevPage={"resize"} nextPage={"user select"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default ScrollBehavior;
