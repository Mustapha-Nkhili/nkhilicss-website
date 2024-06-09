import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BackgroundAttachment = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "background-attachment",
    tableRows: [
      {
        cssClass: "bg-fixed",
        data: "fixed",
      },
      {
        cssClass: "bg-local",
        data: "local",
      },
      {
        cssClass: "bg-scroll",
        data: "scroll",
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

  const backgroundAttachmentCode = `
<div class="bg-scroll">
  This background scrolls with the element.
</div>

<div class="bg-fixed">
  This background is fixed relative to the viewport.
</div>

<div class="bg-local">
  This background scrolls with the element's content.
</div>

  `;

  const hoverCode = `
<p class="bg-fixed hover-bg-local ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="bg-fixed lg-bg-local ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background attachment"
          pageDesc="Pre-built CSS classes to control the background attachment of an element."
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
                Utilize &quot;<span className="text-primary">bg-*</span>
                &quot; classes for managing the the background attachment.
              </>
            }
          />
          <Code code={backgroundAttachmentCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"bg-local"}
        />
        <Footer prevPage={"hyphens"} nextPage={"background clip"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundAttachment;
