const DocsHeader = ({ title, pageTitle, pageDesc }) => {
  return (
    <header>
      <span className="capitalize text-primary text-sm font-semibold">
        {title}
      </span>
      <h1 className="capitalize text-3xl sm-text-4xl mt-5">{pageTitle}</h1>
      <p className="mt-2 text-justify text-base text-light-periwinkle">
        {pageDesc}
      </p>
    </header>
  );
};

export default DocsHeader;
