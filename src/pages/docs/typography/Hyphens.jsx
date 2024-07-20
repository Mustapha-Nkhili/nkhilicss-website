import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Hyphens = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "hyphens",
    tableRows: [
      {
        cssClass: "hyphens-none",
        data: "none",
      },
      {
        cssClass: "hyphens-manual",
        data: "manual",
      },
      {
        cssClass: "hyphens-auto",
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
        { ref: breakpointsRef, label: "Breakpoints and Media queries" },
      ],
    },
  ];

  const hyphensCode = `
<p class="hyphens-none w-52">
  This is a long paragraph that will not be hyphenated even if it extends beyond the container's width.
</p>

<p class="hyphens-manual w-52">
  This is a long paragraph that will only be hyphenated where there are explicit hyphenation points.
</p>

<p class="hyphens-auto w-52">
  This is a long paragraph that will be automatically hyphenated where necessary.
</p>
  `;

  const hoverCode = `
<p class="hyphens-auto w-52 hover-hyphens-manual ..."> 
   ...
</p>
`;

  const breakpointsCode = `
<p class="hyphens-auto w-52 lg-hyphens-manual ..."> 
   ...
</p>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="hyphens"
          pageDesc="Pre-built CSS classes to control the hyphenation of text."
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
                Utilize &quot;<span className="text-primary">hyphens-*</span>
                &quot; classes for managing the hyphenation of text.
              </>
            }
          />
          <Code code={hyphensCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"hyphens-manual"}
        />
        <Footer prevPage={"white space"} nextPage={"background attachment"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Hyphens;
