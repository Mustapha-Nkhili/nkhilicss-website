import Footer from "../../../components/docs/Footer";
import DocsHeader from "../../../components/docs/DocsHeader";
import OnThisPage from "../../../components/docs/OnThisPage";
import SectionHeader from "../../../components/docs/SectionHeader";
import { useRef } from "react";
import CssClassesReferenceTable from "../../../components/docs/CssClassesReferenceTable";
import Code from "../../../components/docs/Code";
import ConditionalCss from "../../../components/docs/ConditionalCss";

const Appearance = () => {
  const quickReferenceRef = useRef(null);
  const usageRef = useRef(null);
  const executingUnderCertainConditionsRef = useRef(null);
  const stateRef = useRef(null);
  const breakpointsRef = useRef(null);

  const cssClassesReference = {
    className: "appearance",
    tableRows: [
      {
        cssClass: "appearance-none",
        data: "none",
      },
      {
        cssClass: "appearance-auto",
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

  const appearanceCode = `
<div class="appearance-auto"></div>
  `;

  const hoverCode = `
<div
  class="appearance-none hover-appearance-auto ..."
 ...
></div>
`;

  const breakpointsCode = `
<div
  class="appearance-none lg-appearance-auto ..."
 ...
></div>
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="interactivity"
          pageTitle="appearance"
          pageDesc="Pre-built CSS classes for suppressing native form control styling"
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
                <span className="text-primary">
                  &quot;appearance-none&quot;
                </span>{" "}
                classes to reset any browser specific styling on an element, and{" "}
                <span className="text-primary">
                  &quot;appearance-auto&quot;
                </span>{" "}
                to restore the default browser specific styling on an element.
              </>
            }
          />
          <Code code={appearanceCode} language="html" />
        </section>
        <ConditionalCss
          headerRef={executingUnderCertainConditionsRef}
          subTitle1Ref={stateRef}
          subTitle2Ref={breakpointsRef}
          hoverCode={hoverCode}
          breakpointsCode={breakpointsCode}
          utility={"appearance-auto"}
        />
        <Footer prevPage={"accent color"} nextPage={"cursor"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Appearance;