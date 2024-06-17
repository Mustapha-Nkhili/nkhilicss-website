import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DocsLayout = () => {
  const docsNav = [
    {
      docLabel: "getting started",
      navList: [
        {
          label: "introduction",
          slug: "introduction",
        },
        {
          label: "installation",
          slug: "installation",
        },
      ],
    },
    {
      docLabel: "layout",
      navList: [
        {
          label: "aspect ratio",
          slug: "aspect-ratio",
        },
        { label: "box sizing", slug: "box-sizing" },
        { label: "display", slug: "display" },
        { label: "float", slug: "float" },
        { label: "object fit", slug: "object-fit" },
        { label: "overflow", slug: "overflow" },
        { label: "position", slug: "position" },
        { label: "top / bottom / left / right", slug: "top-bottom-left-right" },
        { label: "visibility", slug: "visibility" },
        { label: "z index", slug: "z-index" },
      ],
    },
    {
      docLabel: "Flexbox & Grid",
      navList: [
        {
          label: "flex basis",
          slug: "flex-basis",
        },
        {
          label: "flex direction",
          slug: "flex-direction",
        },
        {
          label: "flex wrap",
          slug: "flex-wrap",
        },
        {
          label: "flex",
          slug: "flex",
        },
        {
          label: "flex grow",
          slug: "flex-grow",
        },
        {
          label: "flex shrink",
          slug: "flex-shrink",
        },
        {
          label: "order",
          slug: "order",
        },
        {
          label: "gap",
          slug: "gap",
        },
        {
          label: "justify content",
          slug: "justify-content",
        },
        {
          label: "justify items",
          slug: "justify-items",
        },
        {
          label: "justify self",
          slug: "justify-self",
        },
        {
          label: "align content",
          slug: "align-content",
        },
        {
          label: "align items",
          slug: "align-items",
        },
        {
          label: "align self",
          slug: "align-self",
        },
        {
          label: "place content",
          slug: "place-content",
        },
        {
          label: "place items",
          slug: "place-items",
        },
        {
          label: "place self",
          slug: "place-self",
        },
      ],
    },
    {
      docLabel: "spacing",
      navList: [
        {
          label: "padding",
          slug: "padding",
        },
        {
          label: "margin",
          slug: "margin",
        },
      ],
    },
    {
      docLabel: "sizing",
      navList: [
        {
          label: "width",
          slug: "width",
        },
        {
          label: "min width",
          slug: "min-width",
        },
        {
          label: "max width",
          slug: "max-width",
        },
        {
          label: "height",
          slug: "height",
        },
        {
          label: "min height",
          slug: "min-height",
        },
        {
          label: "max height",
          slug: "max-height",
        },
      ],
    },
    {
      docLabel: "typography",
      navList: [
        {
          label: "font family",
          slug: "font-family",
        },
        {
          label: "font size",
          slug: "font-size",
        },
        {
          label: "font style",
          slug: "font-style",
        },
        {
          label: "font weight",
          slug: "font-weight",
        },
        {
          label: "letter spacing",
          slug: "letter-spacing",
        },
        {
          label: "line height",
          slug: "line-height",
        },
        {
          label: "list style position",
          slug: "list-style-position",
        },
        {
          label: "list style type",
          slug: "list-style-type",
        },
        {
          label: "text align",
          slug: "text-align",
        },
        {
          label: "text color",
          slug: "text-color",
        },
        {
          label: "text decoration line",
          slug: "text-decoration-line",
        },
        {
          label: "text decoration color",
          slug: "text-decoration-color",
        },
        {
          label: "text decoration style",
          slug: "text-decoration-style",
        },
        {
          label: "text decoration thickness",
          slug: "text-decoration-thickness",
        },
        {
          label: "text underline offset",
          slug: "text-underline-offset",
        },
        {
          label: "text transform",
          slug: "text-transform",
        },
        {
          label: "text overflow",
          slug: "text-overflow",
        },
        {
          label: "text wrap",
          slug: "text-wrap",
        },
        {
          label: "text indent",
          slug: "text-indent",
        },
        {
          label: "white space",
          slug: "white-space",
        },
        {
          label: "hyphens",
          slug: "hyphens",
        },
      ],
    },
    {
      docLabel: "backgrounds",
      navList: [
        {
          label: "background attachment",
          slug: "background-attachment",
        },
        {
          label: "background clip",
          slug: "background-clip",
        },
        {
          label: "background color",
          slug: "background-color",
        },
        {
          label: "background origin",
          slug: "background-origin",
        },
        {
          label: "background position",
          slug: "background-position",
        },
        {
          label: "background repeat",
          slug: "background-repeat",
        },
        {
          label: "background size",
          slug: "background-size",
        },
      ],
    },
    {
      docLabel: "borders",
      navList: [
        {
          label: "border radius",
          slug: "border-radius",
        },
        {
          label: "border width",
          slug: "border-width",
        },
        {
          label: "border color",
          slug: "border-color",
        },
        {
          label: "border style",
          slug: "border-style",
        },
        {
          label: "border collapse",
          slug: "border-collapse",
        },
      ],
    },
  ];

  const docsNavRef = useRef(null);

  const handleNavItemClicked = (e) => {
    e.target.getElementsByTagName("a")[0].click();
  };

  const closeDocsNav = () => {
    docsNavRef.current.style.left = "-100%";
  };
  const openDocsNav = () => {
    docsNavRef.current.style.left = "0";
  };

  return (
    <div className="docs-container text-white">
      <div
        className="docs-nav-header bg-main-header flex items-center gap-5 lg-d-none fixed left-0 bg-body border-b p-5 border-b-border-clr border-b-solid w-full z-50"
        style={{ top: "73px" }}
      >
        <div
          className="flex justify-center items-center cursor-pointer w-7 aspect-square rounded bg-white text-black text-sm font-bold"
          onClick={openDocsNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <span>Menu</span>
      </div>
      <nav className="docs-nav">
        <div
          className="overflow-y-auto fixed lg-left-0 h-full w-full lg-w-68 p-5 pb-16 border-r-none lg-border-r lg-border-r-border-clr lg-border-r-solid border-t border-t-border-clr border-t-solid bg-body z-50"
          style={{ left: "-100%" }}
          ref={docsNavRef}
        >
          <div
            className="flex lg-d-none justify-center items-center absolute top-5 right-5 cursor-pointer w-7 aspect-square rounded bg-red text-white text-sm font-bold"
            onClick={closeDocsNav}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
          {docsNav.map((doc) => (
            <>
              <label className="capitalize text-white font-medium">
                {doc.docLabel}
              </label>

              <ul className="ml-5 mt-3 mb-7 list-style-disc capitalize text-sm">
                {doc.navList.map((navItem, index) => (
                  <li
                    key={index}
                    className="w-full text-light-periwinkle hover-text-white mb-2"
                    onClick={handleNavItemClicked}
                  >
                    <NavLink
                      to={navItem.slug}
                      style={({ isActive }) =>
                        isActive ? { color: "#ac6aff" } : null
                      }
                    >
                      {navItem.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </nav>
      <main className="text-white relative mt-32 lg-mt-0 mr-0 xl-mr-72 ml-0 lg-ml-68">
        <Outlet />
      </main>
    </div>
  );
};

export default DocsLayout;
