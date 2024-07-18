import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const PlaceSelf = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "place-self",
    tableRows: [
      {
        cssClass: "place-self-auto",
        data: "auto",
      },
      {
        cssClass: "place-self-start",
        data: "start",
      },
      {
        cssClass: "place-self-end",
        data: "end",
      },
      {
        cssClass: "place-self-center",
        data: "center",
      },
      {
        cssClass: "place-self-stretch",
        data: "stretch",
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

  const placeSelfCode = `
<div class="grid">
  <div class="place-self-start ...">
    <!-- Grid item aligned to the start of both axes -->
  </div>
</div>
  `;

  const hoverCode = `
<div class="grid">
  <div class="place-self-left hover-place-self-center ...">
     ...
  </div>
</div>
`;

  const breakpointsCode = `
<div class="grid">
  <div class="place-self-left lg-place-self-center ...">
     ...
  </div>
</div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="place self"
          pageDesc="Pre-built CSS classes for controlling the justification and alignment of individual item simultaneously."
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
                Utilize{" "}
                <span className="text-primary">&quot;place-self-* &quot;</span>{" "}
                classes for aligning individual items along both the main and
                cross axes within a container.
              </>
            }
          />
          <Code code={placeSelfCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"place-self-center"}
        />
        <Footer prevPage={"place items"} nextPage={"padding"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default PlaceSelf;
