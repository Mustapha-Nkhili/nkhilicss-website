import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const ListStylePosition = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "list-style-position",
    tableRows: [
      {
        cssClass: "list-style-inside",
        data: "inside",
      },
      {
        cssClass: "list-style-outside",
        data: "outside",
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

  const listStylePositionCode = `
<ul class="list-style-inside">
  <li>This list marker is inside.</li>
  <li>This list marker is also inside.</li>
</ul>

<ul class="list-style-outside">
  <li>This list marker is outside.</li>
  <li>This list marker is also outside.</li>
</ul>
  `;

  const hoverCode = `
<ul class="list-style-inside hover-list-style-outside ...">
  <li>...</li>
  ...
</ul>
`;

  const breakpointsCode = `
<ul class="list-style-inside lg-list-style-outside ...">
  <li>...</li>
  ...
</ul>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="typography"
          pageTitle="list style position"
          pageDesc="Pre-built CSS classes for positioning bullets and numbers in lists."
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
                <span className="text-primary">&quot;list-style-*&quot;</span>,
                classes for managing the list style position.
              </>
            }
          />
          <Code code={listStylePositionCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"list-style-outside"}
        />
        <Footer prevPage={"line height"} nextPage={"list style type"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default ListStylePosition;
