import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Float = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "box-sizing",
    tableRows: [
      {
        cssClass: "float-start",
        data: "inline-start",
      },
      {
        cssClass: "float-end",
        data: "inline-end",
      },
      {
        cssClass: "float-right",
        data: "right",
      },
      {
        cssClass: "float-left",
        data: "left",
      },
      {
        cssClass: "float-none",
        data: "none",
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

  const floatCode = `
<div class="float-right ..."></div>
  `;

  const hoverCode = `
<div
  class="float-right hover-float-left ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="float-right lg-float-left ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="float"
          pageDesc="Pre-built CSS classes manage how content wraps around elements."
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
                <span className="text-primary">&quot;float-*&quot;</span>{" "}
                classes for precise element positioning through the float
                property.
              </>
            }
          />
          <Code code={floatCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"float-left"}
        />
        <Footer prevPage={"display"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Float;
