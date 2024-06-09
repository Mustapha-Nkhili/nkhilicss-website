import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BackgroundClip = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "background-clip",
    tableRows: [
      {
        cssClass: "bg-clip-border",
        data: "border-box",
      },
      {
        cssClass: "bg-clip-padding",
        data: "padding-box",
      },
      {
        cssClass: "bg-clip-content",
        data: "content-box",
      },
      {
        cssClass: "bg-clip-text",
        data: "text",
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

  const backgroundClipCode = `
<div class="bg-clip-border p-5" style="background: url('path/to/image.jpg'); border: 5px solid black;">
  Background extends to the outer edge of the border.
</div>

<div class="bg-clip-padding p-5" style="background: url('path/to/image.jpg');">
  Background extends to the outer edge of the padding.
</div>

<div class="bg-clip-content p-5" style="background: url('path/to/image.jpg');">
  Background extends to the outer edge of the content.
</div>
  `;

  const hoverCode = `
<p class="bg-clip-padding hover-bg-clip-border ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="bg-clip-padding lg-bg-clip-border ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background clip"
          pageDesc="Pre-built CSS classes to control the background clipping of an element."
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
                Utilize &quot;<span className="text-primary">bg-clip-*</span>
                &quot; classes for managing the background clipping.
              </>
            }
          />
          <Code code={backgroundClipCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"bg-clip-border"}
        />
        <Footer prevPage={"background attachment"} nextPage={"background color"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundClip;
