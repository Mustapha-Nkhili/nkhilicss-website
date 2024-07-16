import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BackgroundOrigin = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "background-origin",
    tableRows: [
      {
        cssClass: "bg-origin-border",
        data: "border-box",
      },
      {
        cssClass: "bg-origin-padding",
        data: "padding-box",
      },
      {
        cssClass: "bg-origin-content",
        data: "content-box",
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

  const backgroundOriginCode = `
<div class="bg-origin-border bg-gray border border-black p-4">
  This div's background origin is the border box.
</div>
  `;

  const hoverCode = `
<div class="bg-origin-padding hover-bg-origin-border ..."> 
   ...
</div>
`;

  const breakpointsCode = `
<div class="bg-origin-padding lg-bg-origin-border ..."> 
   ...
</div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background origin"
          pageDesc="Pre-built CSS classes to set the background origin of an element."
        />
        <section className="docs-section" id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize &quot;<span className="text-primary">bg-origin-*</span>
                &quot; classes to set the background origin of an element.
              </>
            }
          />
          <Code code={backgroundOriginCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"bg-origin-border"}
        />
        <Footer prevPage={"background color"} nextPage={"background position"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundOrigin;
