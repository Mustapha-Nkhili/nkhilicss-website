import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";

const Optimize = () => {
  const overviewRef = useRef(null);
  const fileStructureRef = useRef(null);
  const minimalSassRef = useRef(null);
  const minifyGzipRef = useRef(null);

  const onThisPage = [
    {
      label: "Overview",
      ref: overviewRef,
    },
    {
      label: "File structure",
      ref: fileStructureRef,
    },
    {
      label: "Minimal sass with use",
      ref: minimalSassRef,
    },
    {
      label: "Minify and gzip for smaller files",
      ref: minifyGzipRef,
    },
  ];

  const fileStructureCode = `
sass/
├── base/
│   └── _base.scss
├── components/
│   └── _button.scss
├── layout/
│   ├── _breakpoints.scss
│   └── _grid.scss
├── utils/
│   ├── _functions.scss
│   ├── _generate-utilities.scss
│   ├── _mixins.scss
│   ├── _utilities-maps.scss
│   ├── _utilities.scss
│   └── _variables.scss
├── index.scss
└── nkhilicss.scss
  `;

  const minimalSassCode = `
// Components (import only what you need)
@use "./nkhilicss/sass/components/button"

@use "./nkhilicss/sass/index";
  `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="Optimize"
          pageDesc="Optimize your Nkhili CSS project to keep it streamlined, responsive, and maintainable."
        />
        <section className="docs-section" id="overview" ref={overviewRef}>
          <SectionHeader
            title="Overview"
            description="In this guide, we will walk you through the process of optimizing your Nkhili CSS project. Deliver the best experience by keeping your projects streamlined, responsive, and maintainable. By the end of this guide, you will have a clear understanding of how to enhance the efficiency of your project, allowing you to focus on more important tasks."
          />
        </section>
        <section
          className="docs-section"
          id="file-structure"
          ref={fileStructureRef}
        >
          <SectionHeader title="File structure" />
          <Code code={fileStructureCode} language="sh" />
        </section>

        <section
          className="docs-section"
          id="minimal-sass-with-use"
          ref={minimalSassRef}
        >
          <SectionHeader
            title={
              <>
                Minimal sass with{" "}
                <span className="bg-gray rounded p-1">@use</span>
              </>
            }
            description="To optimize your CSS when using Sass in your asset pipeline, make sure to only @use the specific components that you need."
          />
          <Code code={minimalSassCode} language="javaScript" />
        </section>

        <section
          className="docs-section"
          id="Minify-and-gzip-for-smaller-files"
          ref={minifyGzipRef}
        >
          <SectionHeader
            title="Minify and gzip for smaller files"
            description="Always compress your code for faster loading. Use minified nkhilicss files (with .min.css extension) or minify your own HTML, and CSS when building nkhilicss from source"
          />
        </section>

        <Footer prevPage={"screens"} nextPage={"aspect ratio"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Optimize;
