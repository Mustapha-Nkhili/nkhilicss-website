import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const PlaceContent = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "place-content",
    tableRows: [
      {
        cssClass: "place-content-start",
        data: "start",
      },
      {
        cssClass: "place-content-end",
        data: "end",
      },
      {
        cssClass: "place-content-center",
        data: "center",
      },
      {
        cssClass: "place-content-between",
        data: "space-between",
      },
      {
        cssClass: "place-content-around",
        data: "space-around",
      },
      {
        cssClass: "place-content-evenly",
        data: "space-evenly",
      },
      {
        cssClass: "place-content-baseline",
        data: "baseline",
      },
      {
        cssClass: "place-content-stretch",
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
  ];

  const placeContentCode = `
<div class="grid place-content-end">
  <!-- Grid container with items aligned to the end -->
</div>
  `;

  const hoverCode = `
<div
  class="grid place-content-left hover-place-content-center ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="grid place-content-left lg-place-content-center ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="place content"
          pageDesc="Pre-built CSS classes for managing content justification and alignment simultaneously."
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
                <span className="text-primary">&quot;place-content-* &quot;</span>{" "}
                classes for distributing space between and around content items
                along both the main and cross axes.
              </>
            }
          />
          <Code code={placeContentCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"place-content-center"}
        />
        <Footer prevPage={"align self"} nextPage={"place items"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default PlaceContent;
