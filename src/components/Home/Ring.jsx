const Ring = ({ width }) => {
  return (
    <div
      className={`absolute rounded-full aspect-square`}
      style={{
        width: width,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid #cac6dd1a"
      }}
    ></div>
  );
};

export default Ring;
