const OnThisPage = ({ onThisPage }) => {
  const scrollTo = (elRef) => {
    elRef.current.style.scrollMarginTop = "90px";
    elRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    history.pushState(null, null, `#${elRef.current.id}`);
  };

  return (
    <aside className="d-none h-fit p-5 xl-block">
      <div className="docs-aside fixed right-6 border-l border-l-border-clr border-l-solid pt-5 pl-5">
        <label className="block pb-4">On This Page</label>
        <ul>
          {onThisPage.map((hash, index) => (
            <li key={hash + index} className="text-sm pb-3">
              <span
                onClick={() => scrollTo(hash.ref)}
                className={`docs-aside__link cursor-pointer text-light-periwinkle ${hash.label
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
              >
                {" "}
                {hash.label}
              </span>
              {hash.subLabels && (
                <ul className="pt-2 pl-7">
                  {hash.subLabels.map((subLabel, index) => (
                    <li
                      key={index + subLabel}
                      className={`docs-aside__link cursor-pointer text-xs text-light-periwinkle list-style-disc ${
                        subLabel.label === "Hover, focus, and other states"
                          ? "hover-focus-and-other-states"
                          : subLabel.label.includes(": ")
                          ? subLabel.label
                              .toLowerCase()
                              .replace(": ", " ")
                              .split(" ")
                              .join("-")
                          : subLabel.label.toLowerCase().split(" ").join("-")
                      }`}
                      onClick={() => scrollTo(subLabel.ref)}
                    >
                      {subLabel.label}
                    </li>
                  ))}{" "}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default OnThisPage;
