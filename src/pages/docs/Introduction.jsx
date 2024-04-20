import { Link } from "react-router-dom";
import Code from "../../components/Code";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  const quickStartRef = useRef(null);
  const instViaPackagemanRef = useRef(null);
  const viewportMeta = useRef(null);
  const [packageManagerCode, setPackageManagerCode] =
    useState("npm i nkhilicss");

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
      href="https://cdn.jsdelivr.net/npm/nkhilicss@1.2.1/dist/css/nkhilicss.min.css"
      />
  </head>
  <body>
    <h1 class="text-sm text-primary text-center font-bold uppercase">
       Hello world!
    </h1>
  </body>
  </html>
  
`;

  const scrollTo = (elRef) => {
    elRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    history.pushState(null, null, `#${elRef.current.id}`);
  };

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <span className="capitalize text-primary text-sm font-semibold">
          getting started
        </span>
        <h1 className="capitalize text-3xl sm-text-4xl mt-5">
          get started with Nkhili CSS
        </h1>
        <p className="mt-2 text-justify text-base text-light-periwinkle">
          A lightweight CSS framework is an indispensable tool for web
          developers seeking efficiency and speed in styling their websites.
          These frameworks provide a structured foundation of pre-written CSS
          code, enabling developers to streamline the styling process and focus
          more on the functionality and user experience of their web
          applications.
        </p>
        <section id="quick-start" ref={quickStartRef}>
          <h2 className="mt-16 mb-2 font-semibold">Quick start</h2>
          <p className="text-sm">
            You can directly include nkhilicss's production-ready CSS via a{" "}
            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">
              <code className="text-primary mr-1">{`<link />`}</code>
            </Link>
            tag in your HTML file. This method doesn't require any build steps.
            Here's how you can do it:
          </p>
          <Code code={htmlCode} language="html" />
        </section>
        <section
          id="instalation-via-package-managers"
          ref={instViaPackagemanRef}
        >
          <h2 className="mt-16 mb-2 font-semibold">
            Instalation via package managers
          </h2>
          <p className="text-sm text-light-periwinkle mb-4">
            NkhiliCSS is a fully customizable CSS framework. Simply install it
            via a package manager of your choice to begin customizing your
            stylesheets effortlessly.
          </p>
          <ul className="flex items-center gap-5">
            <li
              className="pb-1 border-b-2 border-b-primary border-b-solid cursor-pointer"
              onClick={() => setPackageManagerCode("npm i nkhilicss")}
            >
              npm
            </li>
            <li
              className="pb-1 border-b-2 border-b-primary border-b-solid cursor-pointer"
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
        <section id="viewport-meta" ref={viewportMeta}>
          <h2 className="mt-16 mb-2 font-semibold">Viewport meta</h2>

          <p className="text-sm text-light-periwinkle mb-4">
            nkhilicss employs a mobile-first approach, prioritizing code
            optimization for mobile devices before scaling up components as
            needed using CSS media queries. For consistent rendering and touch
            zooming across all devices, it's essential to include the responsive
            viewport meta tag in the {`<head>`} of your document.
          </p>
          <Code
            code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
            language="html"
          />
        </section>
        <footer className="text-sm text-light-periwinkle border-t border-t-border-clr border-t-solid mt-20 pt-5 text-center">
          Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
          <Link to="https://mustapha-nkhili.web.app" target="_blanck" className="text-primary">
            Mustapha Nkhili
          </Link>
        </footer>
      </div>
      <aside className="d-none h-fit p-5 xl-block">
        <div className="docs-aside fixed right-6 border-l border-l-border-clr border-l-solid pt-5 pl-5">
          <label className="block pb-4">On This Page</label>
          <ul>
            <li
              className="cursor-pointer text-sm text-light-periwinkle pb-2"
              onClick={() => scrollTo(quickStartRef)}
            >
              Quick start
            </li>
            <li
              className="cursor-pointer text-sm text-light-periwinkle pb-2"
              onClick={() => scrollTo(instViaPackagemanRef)}
            >
              Instalation via package managers
            </li>
            <li
              className="cursor-pointer text-sm text-light-periwinkle pb-2"
              onClick={() => scrollTo(viewportMeta)}
            >
              Viewport meta
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Introduction;
