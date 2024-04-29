import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Visibility = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "visibility",
    tableRows: [
      {
        cssClass: "visible",
        data: "visible",
      },
      {
        cssClass: "invisible",
        data: "hidden",
      },
      {
        cssClass: "collapse",
        data: "collapse",
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

  const invisibleCode = `
<div class="invisible..."></div>
  `;

  const hoverCode = `
<div
  class="collapse hover-visible ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="collapse lg-visible ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="Visibility"
          pageDesc="Pre-built CSS Classes to Manage Element Visibility."
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
                <span className="text-primary">&quot;visible&quot;</span>,{" "}
                <span className="text-primary">&quot;invisible&quot;</span>, and{" "}
                <span className="text-primary">&quot;collapse&quot;</span>{" "}
                classes for precise element visibility control.
              </>
            }
          />
          <Code code={invisibleCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"visible"}
        />
        <Footer prevPage={"top bottom left right"} nextPage={"z index"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Visibility;
