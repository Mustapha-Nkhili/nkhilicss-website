import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const PointerEvents = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "pointer-events",
    tableRows: [
      {
        cssClass: "pointer-events-none",
        data: "none",
      },
      {
        cssClass: "pointer-events-auto",
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

  const pointerEventsCode = `
<div class="pointer-events-auto"></div>
  `;

  const hoverCode = `
<div
  class="pointer-events-none hover-pointer-events-auto ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="pointer-events-none lg-pointer-events-auto ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="pointer events"
          pageDesc="Pre-built CSS classes for controlling whether an element responds to pointer events."
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
                <span className="text-primary">
                  &quot;pointer-events-none&quot;
                </span>{" "}
                classes to make an element ignore pointer events (like hover, click ...), and{" "}
                <span className="text-primary">
                  &quot;pointer-events-auto&quot;
                </span>{" "}
                to revert to the default browser behavior for pointer events.
              </>
            }
          />
          <Code code={pointerEventsCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"pointer-events-auto"}
        />
        <Footer prevPage={"caret color"} nextPage={"resize"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default PointerEvents;