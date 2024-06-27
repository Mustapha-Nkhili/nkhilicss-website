import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const UserSelect = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "user-select",
    tableRows: [
      {
        cssClass: "select-text",
        data: "none",
      },
      {
        cssClass: "select-text",
        data: "text",
      },
      {
        cssClass: "select-all",
        data: "all",
      },
      {
        cssClass: "select-auto",
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
        { ref: breakpointsRef, label: "Breakpoints & Media queries" },
      ],
    },
  ];

  const selectCode = `
<div class="select-all"></div>
  `;

  const hoverCode = `
<div
  class="select-none hover-select-text ..."
 ...
></div>
 `;

  const breakpointsCode = `
<div
  class="select-none lg-select-text ..."
 ...
></div>
 `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="user select"
          pageDesc="Pre-built CSS classes for controlling how an element can be selected"
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
                <span className="text-primary">&quot;select-*&quot;</span>{" "}
                classes to allow or prevent selecting.
              </>
            }
          />
          <Code code={selectCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"select-text"}
        />
        <Footer prevPage={"resize"} nextPage={"will change"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default UserSelect;
