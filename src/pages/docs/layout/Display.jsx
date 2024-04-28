import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";
import avatar from "../../../assets/guy-avatar.avif";

const Display = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const blockInlineUsageRef = useRef(null);
  const flexUsageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "display",
    tableRows: [
      {
        cssClass: "d-none",
        data: "d-none",
      },
      {
        cssClass: "flex",
        data: "flex",
      },
      {
        cssClass: "inline-flex",
        data: "inline-flex",
      },
      {
        cssClass: "block",
        data: "block",
      },
      {
        cssClass: "inline-block",
        data: "inline-block",
      },
      {
        cssClass: "grid",
        data: "grid",
      },
      {
        cssClass: "inline-grid",
        data: "inline-grid",
      },
      {
        cssClass: "flow-root",
        data: "flow-root",
      },
      {
        cssClass: "contents",
        data: "contents",
      },
      {
        cssClass: "table-row",
        data: "table-row",
      },
      {
        cssClass: "list-item",
        data: "list-item",
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
        { ref: blockInlineUsageRef, label: "Block & Inline-block" },
        { ref: flexUsageRef, label: "Flex" },
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

  const blockInlineUsageCode = `
  <div class="m-auto w-fit text-black font-semibold text-sm">
  <div class="inline-block p-5 bg-primary rounded-2 mr-5">
    display: inline-block;
  </div>
  <div class="inline-block p-5 bg-primary rounded-2">
    display: inline-block;
  </div>
</div>
  `;

  const blockUsageCode = `
<div className="block p-5 text-black font-semibold text-sm bg-primary rounded-2 mb-5 mt-10">
  display: block;
</div>
<div className="block p-5 text-black font-semibold text-sm bg-primary rounded-2">display: block;</div>
  `;

  const flexCode = `
  <div className="flex items-center flex-column bg-primary p-5 rounded gap-6 w-64 text-center m-auto">
  <img
    src="path/to/image.jpg"
    alt="anime avatar"
    className="w-16 rounded-full"
  />
  <div>
    <h3>Mustapha Nkhili</h3>
    <span className="text-sm text-light-periwinkle pt-3">
      Front End Developer
    </span>
  </div>
  <button className="text-sm p-2 w-24 bg-black border-none rounded cursor-pointer">
    Connect
  </button>
</div>
  `;

  const hoverCode = `
<div
  class="block hover-flex ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="d-none lg-flex ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="layout"
          pageTitle="aspect ratio"
          pageDesc="Pre-built CSS classes for controlling the dimensions of an element"
        />
        <section id="quick-reference" ref={quickReferenceRef}>
          <SectionHeader title="Quick reference" />
          <CssClassesReferenceTable cssClassesReference={cssClassesReference} />
        </section>
        <section id="usage" ref={usageRef}>
          <SectionHeader title="Usage" />
          <h4
            className="font-medium mt-5"
            id="block-and-inline"
            ref={blockInlineUsageRef}
          >
            Block & Inline-block
          </h4>
          <p className="text-sm text-light-periwinkle mt-2 mb-10">
            Utilize inline-block, and block utilities for precise control over
            element positioning
          </p>

          <div className="m-auto w-fit text-black font-semibold text-sm">
            <div className="inline-block p-5 bg-primary rounded-2 mr-5">
              display: inline-block;
            </div>
            <div className="inline-block p-5 bg-primary rounded-2">
              display: inline-block;
            </div>
          </div>

          <Code code={blockInlineUsageCode} language="html" />

          <div className="block p-5 text-black font-semibold text-sm bg-primary rounded-2 mb-5 mt-10">
            display: block;
          </div>
          <div className="block p-5 text-black font-semibold text-sm bg-primary rounded-2">
            display: block;
          </div>
          <Code code={blockUsageCode} language="html" />
          <h4 className="font-medium mt-5" id="flex" ref={flexUsageRef}>
            Flex
          </h4>
          <p className="text-sm text-light-periwinkle mt-2 mb-10">
            Utilize the <span className="text-primary">flex</span> utility to
            establish a block-level flex container.
          </p>
          <div className="flex items-center flex-column bg-primary p-5 rounded gap-6 w-64 text-center m-auto">
            <img
              src={avatar}
              alt="anime avatar"
              className="w-16 rounded-full"
            />
            <div>
              <h3>Mustapha Nkhili</h3>
              <span className="text-sm text-light-periwinkle pt-3">
                Front End Developer
              </span>
            </div>
            <button className="text-sm p-2 w-24 bg-black border-none rounded cursor-pointer">
              Connect
            </button>
          </div>
          <Code code={flexCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"flex"}
        />
        <Footer prevPage={"aspect ratio"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Display;
