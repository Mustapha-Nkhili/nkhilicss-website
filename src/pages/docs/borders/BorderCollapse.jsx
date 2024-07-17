import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const BorderCollapse = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "border-collapse",
    tableRows: [
      {
        cssClass: "border-collapse",
        data: "collapse",
      },
      {
        cssClass: "border-separate",
        data: "separate",
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

  const borderCollapseCode = `
<table class="border-collapse border borders-solid border-gray w-full">
  <tr>
    <td class="border border-solid border-black p-2">Cell 1</td>
    <td class="border border-solid border-black p-2">Cell 2</td>
  </tr>
  <tr>
    <td class="border border-solid border-black p-2">Cell 3</td>
    <td class="border border-solid border-black p-2">Cell 4</td>
  </tr>
</table>
  `;

  const hoverCode = `
<div
  class="border-collapse hover-border-separate ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="border-collapse lg-border-separate ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="borders"
          pageTitle="border collapse"
          pageDesc="Pre-built CSS classes to specify whether the borders of the table and its cells are collapsed into a single border or separated as individual borders."
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
                  &quot;border-collapse&quot;
                </span>{" "},
                <span className="text-primary">
                  &quot;border-separate&quot;
                </span>{" "}
                classes to control the border collapse behavior of
                table elements.
              </>
            }
          />
          <Code code={borderCollapseCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"border-separate"}
        />
        <Footer prevPage={"border style"} nextPage={"outline width"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BorderCollapse;
