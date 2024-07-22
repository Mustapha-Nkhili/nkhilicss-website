import { Link } from "react-router-dom";
import Code from "../../../components/docs/Code";
import { useRef, useState } from "react";
import Footer from "../../../components/docs/Footer";
import OnThisPage from "../../../components/docs/OnThisPage";
import DocsHeader from "../../../components/docs/DocsHeader";
import SectionHeader from "../../../components/docs/SectionHeader";

const Introduction = () => {
  const quickStartRef = useRef(null);
  const instViaPackagemanRef = useRef(null);
  const viewportMeta = useRef(null);
  const [packageManagerCode, setPackageManagerCode] =
    useState("npm i nkhilicss");

  const onThisPage = [
    { label: "Quick start", ref: quickStartRef },
    { label: "Instalation via package managers", ref: instViaPackagemanRef },
    { label: "Viewport meta", ref: viewportMeta },
  ];
  const htmlCode = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Page Title</title>
      <!-- Include Nkhili's CSS via CDN -->
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/nkhilicss@2.1.1/dist/css/nkhilicss.min.css"
      />
  </head>
  <body>
    <h1 class="text-sm text-primary text-center font-bold uppercase">
       Hello world!
    </h1>
  </body>
  </html>
  
`;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="getting started"
          pageTitle="get started with Nkhili CSS"
          pageDesc="A lightweight CSS framework is an indispensable tool for web
          developers seeking efficiency and speed in styling their websites.
          This framework provide a structured foundation of pre-written CSS
          code, enabling developers to streamline the styling process and focus
          more on the functionality and user experience of their web
          applications."
        />
        <section className="docs-section" id="quick-start" ref={quickStartRef}>
          <SectionHeader
            title="Quick start"
            description={
              <>
                You can directly include nkhilicss's production-ready CSS via a{" "}
                <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">
                  <code className="text-primary mr-1">{`<link />`}</code>
                </Link>
                tag in your HTML file. This method doesn't require any build
                steps. Here's how you can do it:
              </>
            }
          />
          <Code code={htmlCode} language="html" />
        </section>
        <section
          className="docs-section"
          id="instalation-via-package-managers"
          ref={instViaPackagemanRef}
        >
          <ul className="flex items-center gap-5 mt-10">
            <li
              className={`"pb-1 border-b-2 ${
                packageManagerCode.includes("npm")
                  ? "border-b-primary"
                  : "border-b-none"
              } border-b-solid cursor-pointer`}
              onClick={() => setPackageManagerCode("npm i nkhilicss")}
            >
              npm
            </li>
            <li
              className={`"pb-1 border-b-2 ${
                packageManagerCode.includes("yarn")
                  ? "border-b-primary"
                  : "border-b-none"
              } border-b-solid cursor-pointer`}
              onClick={() => setPackageManagerCode("yarn add nkhilicss")}
            >
              yarn
            </li>
          </ul>
          <Code code={`$ ${packageManagerCode}`} language="bash" />
          <p className="text-sm text-light-periwinkle mt-1">
            <span className="text-info">Note : </span> You can integrate
            nkhilicss's source files into your project using various popular
            package managers. Regardless of the package manager you choose,
            ensure you have a Sass compiler to replicate the setup of our
            official compiled versions.
          </p>
        </section>
        <section
          className="docs-section mb-32"
          id="viewport-meta"
          ref={viewportMeta}
        >
          <SectionHeader
            title="Viewport meta"
            description="  nkhilicss employs a mobile-first approach, prioritizing code
            optimization for mobile devices before scaling up components as
            needed using CSS media queries. For consistent rendering and touch
            zooming across all devices, it's essential to include the responsive
            viewport meta tag in the <head> of your document."
          />
          <Code
            code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
            language="html"
          />
        </section>
        <Footer nextPage={"installation"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Introduction;
