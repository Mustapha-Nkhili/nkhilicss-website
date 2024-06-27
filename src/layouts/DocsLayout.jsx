import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DocsLayout = () => {
  const docsNav = [
    {
      docLabel: "getting started",
      navList: ["introduction", "installation"],
    },
    {
      docLabel: "layout",
      navList: [
        "aspect ratio",
        "box sizing",
        "display",
        "float",
        "object fit",
        "overflow",
        "position",
        "top bottom left right",
        "visibility",
        "z index",
      ],
    },
    {
      docLabel: "Flexbox & Grid",
      navList: [
        "flex basis",
        "flex direction",
        "flex wrap",
        "flex",
        "flex grow",
        "flex shrink",
        "order",
        "gap",
        "justify content",
        "justify items",
        "justify self",
        "align content",
        "align items",
        "align self",
        "place content",
        "place items",
        "place self",
      ],
    },
    {
      docLabel: "spacing",
      navList: ["padding", "margin"],
    },
    {
      docLabel: "sizing",
      navList: [
        "width",
        "min width",
        "max width",
        "height",
        "min height",
        "max height",
      ],
    },
    {
      docLabel: "typography",
      navList: [
        "font family",
        "font size",
        "font style",
        "font weight",
        "letter spacing",
        "line height",
        "list style position",
        "list style type",
        "text align",
        "text color",
        "text decoration line",
        "text decoration color",
        "text decoration style",
        "text decoration thickness",
        "text underline offset",
        "text transform",
        "text overflow",
        "text wrap",
        "text indent",
        "white space",
        "hyphens",
      ],
    },
    {
      docLabel: "backgrounds",
      navList: [
        "background attachment",
        "background clip",
        "background color",
        "background origin",
        "background position",
        "background repeat",
        "background size",
      ],
    },
    {
      docLabel: "borders",
      navList: [
        "border radius",
        "border width",
        "border color",
        "border style",
        "border collapse",
        "outline width",
        "outline color",
        "outline style",
        "outline offset",
      ],
    },
    {
      docLabel: "filters",
      navList: [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue rotate",
        "invert",
        "saturate",
        "sepia",
        "opacity",
        "backdrop blur",
        "backdrop brightness",
        "backdrop contrast",
        "backdrop grayscale",
        "backdrop hue rotate",
        "backdrop invert",
        "backdrop opacity",
        "backdrop saturate",
        "backdrop sepia",
      ],
    },
    {
      docLabel: "transitions",
      navList: [
        "transition property",
        "transition duration",
        "transition timing function",
        "transition delay",
      ],
    },
    {
      docLabel: "transforms",
      navList: ["scale", "rotate", "translate", "skew", "transform origin"],
    },
    {
      docLabel: "interactivity",
      navList: [
        "accent color",
        "appearance",
        "cursor",
        "caret color",
        "pointer events",
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
                      to={
                        navItem.includes(" ")
                          ? navItem.split(" ").join("-")
                          : navItem
                      }
                      style={({ isActive }) =>
                        isActive ? { color: "#ac6aff" } : null
                      }
                    >
                      {navItem !== "top bottom left right"
                        ? navItem
                        : "top / bottom / left / right"}
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
