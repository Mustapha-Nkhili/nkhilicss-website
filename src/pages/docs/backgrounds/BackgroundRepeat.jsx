import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BackgroundRepeat = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "background-repeat",
    tableRows: [
      {
        cssClass: "bg-repeat",
        data: "repeat",
      },
      {
        cssClass: "bg-no-repeat",
        data: "no-repeat",
      },
      {
        cssClass: "bg-repeat-x",
        data: "repeat-x",
      },
      {
        cssClass: "bg-repeat-y",
        data: "repeat-y",
      },
      {
        cssClass: "bg-repeat-round",
        data: "round",
      },
      {
        cssClass: "bg-repeat-space",
        data: "space",
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

  const backgroundRepeatCode = `
<div class="bg-repeat bg-gray border border-black border-solid p-4" style="background-image: url('example.png');">
  This div's background image repeats both horizontally and vertically.
</div>
  `;

  const hoverCode = `
<div class="bg-repeat-space hover-bg-repeat-y ..."> 
   ...
</div>
`;

  const breakpointsCode = `
<div class="bg-repeat-space lg-bg-repeat-y ..."> 
   ...
</div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="backgrounds"
          pageTitle="background repeat"
          pageDesc="Pre-built CSS classes to control the repeating behavior of the background image of an element."
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
                Utilize &quot;<span className="text-primary">bg-repeat-*</span>
                &quot; classes to control the repeating behavior of the
                background image of an element.
              </>
            }
          />
          <Code code={backgroundRepeatCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"bg-repeat-y"}
        />
        <Footer
          prevPage={"background position"}
          nextPage={"background size"}
        />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BackgroundRepeat;
