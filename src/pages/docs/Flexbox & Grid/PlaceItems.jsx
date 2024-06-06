import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const PlaceItems = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "place-items",
    tableRows: [
      {
        cssClass: "place-items-start",
        data: "start",
      },
      {
        cssClass: "place-items-end",
        data: "end",
      },
      {
        cssClass: "place-items-center",
        data: "center",
      },
      {
        cssClass: "place-items-baseline",
        data: "baseline",
      },
      {
        cssClass: "place-items-stretch",
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

  const placeItemsCode = `
<div class="grid place-items-end">
  <!-- Grid container with items aligned to the end -->
</div>
  `;

  const hoverCode = `
<div
  class="grid place-items-left hover-place-items-center ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="grid place-items-left lg-place-items-center ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="Flexbox & Grid"
          pageTitle="place items"
          pageDesc="Pre-built CSS classes for controlling the justification and alignment of items simultaneously."
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
                <span className="text-primary">&quot;place-items-* &quot;</span>{" "}
                classes for aligning items along both the main and cross axes
                within a container.
              </>
            }
          />
          <Code code={placeItemsCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"place-items-center"}
        />
        <Footer prevPage={"place content"} nextPage={"place self"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default PlaceItems;
