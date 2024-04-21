const SectionHeader = ({ title, description }) => {
  return (
    <>
      <h2 className="mt-16 mb-2 font-semibold">{title}</h2>
      <p className="text-sm text-light-periwinkle mb-4">{description}</p>
    </>
  );
};

export default SectionHeader;
