import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const ObjectFit = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "object-fit",
    tableRows: [
      {
        cssClass: "object-cover",
        data: "cover",
      },
      {
        cssClass: "object-contain",
        data: "contain",
      },
      {
        cssClass: "object-fill",
        data: "fill",
      },
      {
        cssClass: "object-none",
        data: "none",
      },
      {
        cssClass: "object-scale-down",
        data: "scale-down",
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

  const objectFitCode = `
<div class="object-contain..."></div>
  `;

  const hoverCode = `
<div
  class="object-none hover-object-cover ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="object-none lg-object-cover ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="object fit"
          pageDesc="Pre-built CSS classes control the resizing of content within replaced elements."
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
                <span className="text-primary">&quot;object-*&quot;</span>{" "}
                classes for precise resizing of elements with the object-fit
                property.
              </>
            }
          />
          <Code code={objectFitCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"object-cover"}
        />
        <Footer prevPage={"float"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default ObjectFit;
