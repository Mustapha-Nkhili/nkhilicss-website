import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const TextTransform = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "text-transform",
    tableRows: [
      {
        cssClass: "uppercase",
        data: "uppercase",
      },
      {
        cssClass: "lowercase",
        data: "lowercase",
      },
      {
        cssClass: "capitalize",
        data: "capitalize",
      },
      {
        cssClass: "normal-case",
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
  ];

  const textTransformCode = `
<p class="normal-case">This text has no transformation.</p>
  `;

  const hoverCode = `
<p class="normal-case hover-uppercase ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="normal-case lg-uppercase ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="text transform"
          pageDesc="Pre-built CSS classes  to control the text transformation of an element."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize &quot;<span className="text-primary">uppercase</span>
                &quot; &quot;<span className="text-primary">lowercase</span>
                &quot; &quot;<span className="text-primary">capitalize</span>
                &quot; &quot;<span className="text-primary">normal-case</span>
                &quot; classes for managing the text transformation of an
                element.
              </>
            }
          />
          <Code code={textTransformCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"uppercase"}
        />
        <Footer prevPage={"text underline offset"} nextPage={"text overflow"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default TextTransform;
