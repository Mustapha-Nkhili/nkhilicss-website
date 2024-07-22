import { Link } from "react-router-dom";
import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const Installation = () => {
  const packageManagers = useRef(null);
  const npmRef = useRef(null);
  const yarnRef = useRef(null);
  const getNkhiliCssRef = useRef(null);
  const htmlLinkRef = useRef(null);
  const importCssLinkRef = useRef(null);

  const onThisPage = [
    {
      label: "Package managers",
      ref: packageManagers,
      subLabels: [
        { ref: npmRef, label: "npm" },
        { ref: yarnRef, label: "yarn" },
      ],
    },
    {
      label: "Get the nkhilicss CSS file",
      ref: getNkhiliCssRef,
      subLabels: [
        { ref: htmlLinkRef, label: "html link" },
        { ref: importCssLinkRef, label: "css import" },
      ],
    },
  ];
  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="getting started"
          pageTitle="how to install nkhili CSS"
          pageDesc="Craft your unique theme with complete customization options. Tailor every aspect to suit your project's needs, ensuring full control and flexibility throughout the styling process"
        />
        <section
          className="docs-section"
          id="package-managers"
          ref={packageManagers}
        >
          <SectionHeader
            title="Package managers"
            description="Integrate nkhilicss's source files seamlessly into your project
            using various popular package managers. Regardless of the package
            manager you choose, ensure you have a Sass compiler installed to
            replicate the setup found in our official compiled versions"
          />
          <div className="docs-section" id="npm" ref={npmRef}>
            <h4 className="font-medium mt-4">npm</h4>
            <p className="text-xs text-light-periwinkle mb-4">
              Add nkhilicss to your Node.js applications effortlessly using the{" "}
              <Link
                to="https://www.npmjs.com/package/nkhilicss"
                className="text-primary text-dec-underline"
                target="_blanck"
              >
                npm package manager
              </Link>{" "}
              :
            </p>
            <Code code={`npm install nkhilicss`} language={"bash"} />
          </div>

          <div className="docs-section" id="yarn" ref={yarnRef}>
            <h4 className="font-medium mt-4">yarn</h4>
            <p className="text-xs text-light-periwinkle mb-4">
              Add nkhilicss to your Node.js applications effortlessly using the{" "}
              <Link
                to="https://classic.yarnpkg.com/en/package/nkhilicss"
                className="text-primary text-dec-underline"
                target="_blanck"
              >
                yarn package manager
              </Link>{" "}
              :
            </p>
            <Code code={`npm install nkhilicss`} language={"bash"} />
          </div>
        </section>
        <section
          className="docs-section"
          id="get-the-nkhilicss-css-file"
          ref={getNkhiliCssRef}
        >
          <SectionHeader
            title="Get the nkhilicss CSS file"
            description="Access the minified .css file containing the entire NkhiliCSS framework"
          />
          <div className="docs-section" id="html-link" ref={htmlLinkRef}>
            <h4 className="font-medium mt-4">
              HTML <code className="ml-2 text-primary">{`<link />`}</code>
            </h4>
            <Code
              code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nkhilicss@2.1.1/dist/css/nkhilicss.min.css" />`}
              language="html"
            />
          </div>
          <div
            className="docs-section"
            id="css-import-link"
            ref={importCssLinkRef}
          >
            <h4 className="font-medium mt-4">
              CSS <code className="ml-2 text-primary">{`@import`}</code>
            </h4>
            <Code
              code={`@import "https://cdn.jsdelivr.net/npm/nkhilicss@2.1.1/dist/css/nkhilicss.min.css";`}
              language="css"
            />
          </div>
        </section>
        <Footer prevPage={"introduction"} nextPage={"overview"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Installation;
