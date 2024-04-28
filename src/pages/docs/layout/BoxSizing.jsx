import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import avatar from "../../../assets/guy-avatar.avif";

const BoxSizing = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const borderBox = useRef(null);
  const contentBoxRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "box-sizing",
    tableRows: [
      {
        cssClass: "box-border",
        data: "border-box",
      },
      {
        cssClass: "box-content",
        data: "content-box",
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
      subLabels: [
        { ref: borderBox, label: "border-box" },
        { ref: contentBoxRef, label: "content-box" },
      ],
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

  const borderBoxCode = `
<div class="box-border ..."></div>
  `;

  const contentBoxCode = `
  <div class="box-content ..."></div>
  `;

  const hoverCode = `
<div
  class="box-content hover-box-border ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="box-content lg-box-border ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="aspect ratio"
          pageDesc="Pre-built CSS classes for managing how the browser determines the overall dimensions of an element."
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <h4 className="font-medium mt-5" id="border-box" ref={borderBox}>
            border-box
          </h4>
          <p className="text-sm text-light-periwinkle mt-2 mb-10">
            To include padding and borders in an element's size calculation, use
            the <span className="text-primary">&quot;box-border&quot;</span>{" "}
            utility. It sets the{" "}
            <span className="text-primary">&quot;box-sizing&quot;</span>{" "}
            property to{" "}
            <span className="text-primary">&quot;border-box&quot;</span>, making
            the browser consider both borders and padding when defining the
            element's height or width.
          </p>

          <Code code={borderBoxCode} language="html" />
          <h4 className="font-medium mt-5" id="content-box" ref={contentBoxRef}>
            content-box
          </h4>
          <p className="text-sm text-light-periwinkle mt-2 mb-10">
            To exclude padding and borders from an element's size calculation,
            apply the{" "}
            <span className="text-primary">&quot;box-content&quot;</span>{" "}
            utility. This sets the{" "}
            <span className="text-primary">&quot;box-sizing&quot;</span>{" "}
            property to{" "}
            <span className="text-primary">&quot;content-box&quot;</span>,
            prompting the browser to only consider the element's content when
            specifying its height or width.
          </p>
          <Code code={contentBoxCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"box-border"}
        />
        <Footer prevPage={"aspect ratio"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default BoxSizing;
