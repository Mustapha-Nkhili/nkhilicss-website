import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Overflow = () => {
  const quickReferenceRef = useRef(null);
  const overflowReferenceRef = useRef(null);
  const overflowXReferenceRef = useRef(null);
  const overflowYReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const overflowReference = {
    className: "overflow",
    tableRows: [
      {
        cssClass: "overflow-auto",
        data: "auto",
      },
      {
        cssClass: "overflow-hidden",
        data: "hidden",
      },
      {
        cssClass: "overflow-clip",
        data: "clip",
      },
      {
        cssClass: "overflow-visible",
        data: "visible",
      },
      {
        cssClass: "overflow-scroll",
        data: "scroll",
      },
    ],
  };

  const overflowXReference = {
    className: "overflow-x",
    tableRows: [
      {
        cssClass: "overflow-x-auto",
        data: "auto",
      },
      {
        cssClass: "overflow-x-hidden",
        data: "hidden",
      },
      {
        cssClass: "overflow-x-clip",
        data: "clip",
      },
      {
        cssClass: "overflow-x-visible",
        data: "visible",
      },
      {
        cssClass: "overflow-x-scroll",
        data: "scroll",
      },
    ],
  };

  const overflowYReference = {
    className: "overflow-y",
    tableRows: [
      {
        cssClass: "overflow-y-auto",
        data: "auto",
      },
      {
        cssClass: "overflow-y-hidden",
        data: "hidden",
      },
      {
        cssClass: "overflow-y-clip",
        data: "clip",
      },
      {
        cssClass: "overflow-y-visible",
        data: "visible",
      },
      {
        cssClass: "overflow-y-scroll",
        data: "scroll",
      },
    ],
  };

  const onThisPage = [
    {
      label: "Quick reference",
      ref: quickReferenceRef,
      subLabels: [
        { ref: overflowReferenceRef, label: "Overflow Reference" },
        { ref: overflowXReferenceRef, label: "Overflow-x Reference" },
        { ref: overflowYReferenceRef, label: "Overflow-Y Reference" },
      ],
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

  const overflowHiddenCode = `
<div class="overflow-hidden...">
    Content here that might overflow the container but will be hidden instead.
</div>
  `;

  const hoverCode = `
<div
  class="overflow-hidden hover-overflow-visible ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="overflow-hidden lg-overflow-visible ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="overflow"
          pageDesc="
          Pre-built CSS classes for controlling how an element manages excessive content within its container."
        />
        <section
          className="docs-section"
          id="quick-reference"
          ref={quickReferenceRef}
        >
          <SectionHeader title="Quick reference" />
          <div
            className="docs-section"
            id="overflow-reference"
            ref={overflowReferenceRef}
          >
            <h3 className="font-medium mt-5 text-light-periwinkle">
              Overflow Reference
            </h3>
            <CssClassesReferenceTable cssClassesReference={overflowReference} />
          </div>
          <div
            className="docs-section"
            id="overflow-x-reference"
            ref={overflowXReferenceRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              Overflow-x Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={overflowXReference}
            />
          </div>
          <div
            className="docs-section"
            id="overflow-y-reference"
            ref={overflowYReferenceRef}
          >
            <h3 className="font-medium mt-32 text-light-periwinkle">
              Overflow-y Reference
            </h3>
            <CssClassesReferenceTable
              cssClassesReference={overflowYReference}
            />
          </div>
        </section>
        <section className="docs-section" id="usage" ref={usageRef}>
          <SectionHeader
            title="Usage"
            description={
              <>
                Utilize{" "}
                <span className="text-primary">&quot;overflow-*&quot;</span>{" "}
                classes for controlling overflow behavior of elements.
              </>
            }
          />
          <Code code={overflowHiddenCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"overflow-visible"}
        />
        <Footer prevPage={"object fit"} nextPage={"position"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Overflow;
