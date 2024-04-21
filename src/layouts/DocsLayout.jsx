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
          className="overflow-y-auto fixed h-full w-full lg-w-68 p-5 border-r-none lg-border-r lg-border-r-border-clr lg-border-r-solid border-t border-t-border-clr border-t-solid bg-body z-50"
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
                        isActive ? { color: "white" } : null
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