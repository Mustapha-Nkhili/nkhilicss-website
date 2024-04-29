export const generateSpacingValues = (spacing) => {
  const generatedSpacingValues = [];

  // Loop for values less than 12 (increments of 1)
  for (let i = 1; i <= 11; i++) {
    generatedSpacingValues.push({
      cssClass: `${spacing}-${i}`,
      data: (
        <>
          {i * 0.25}rem{" "}
          <span className="ml-5 text-primary">{`// ${i * 0.25 * 16}px`} </span>
        </>
      ),
    });
  }

  // Loop for values between 12 and 19 (increments of 2)
  for (let i = 12; i <= 18; i += 2) {
    generatedSpacingValues.push({
      cssClass: `${spacing}-${i}`,
      data: (
        <>
          {i * 0.25}rem{" "}
          <span className="ml-5 text-primary">{`// ${i * 0.25 * 16}px`} </span>
        </>
      ),
    });
  }

  // Loop for values greater than 19 (increments of 4)
  for (let i = 20; i <= 100; i += 4) {
    generatedSpacingValues.push({
      cssClass: `${spacing}-${i}`,
      data: (
        <>
          {i * 0.25}rem{" "}
          <span className="ml-5 text-primary">{`// ${i * 0.25 * 16}px`} </span>
        </>
      ),
    });
  }

  return generatedSpacingValues;
};
