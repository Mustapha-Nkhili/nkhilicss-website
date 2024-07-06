import { mix } from "polished";

export const generateSpacingValues = (spacing, propertyDataFunction) => {
  const generatedSpacingValues = [];

  // Loop for values less than 12 (increments of 1)
  for (let i = 1; i <= 11; i++) {
    generatedSpacingValues.push({
      cssClass: `${spacing}-${i}`,
      data: (
        <>
          {propertyDataFunction
            ? `${propertyDataFunction}(${i * 0.25}rem)`
            : `${i * 0.25}rem`}
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
          {propertyDataFunction
            ? `${propertyDataFunction}(${i * 0.25}rem)`
            : `${i * 0.25}rem`}
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
          {propertyDataFunction
            ? `${propertyDataFunction}(${i * 0.25}rem)`
            : `${i * 0.25}rem`}
          <span className="ml-5 text-primary">{`// ${i * 0.25 * 16}px`} </span>
        </>
      ),
    });
  }

  return generatedSpacingValues;
};

// const generateColorVraiations = (color) => {
// const generatedColorVariations = [];
// for (let i = 0; )
// }

export const generateColorValues = (prefix) => {
  const generatedColorValues = [];

  const colors = {
    black: "black",
    white: "white",
    transparent: "transparent",
    inherit: "inherit",
    primary: "#326dee",
    secondary: "#1ac886",
    error: "#d32752",
    info: "#f6c31c",
    blue: "#1919e6",
    red: "#e61919",
    yellow: "#e6e619",
    green: "#19e635",
    orange: "#ffa600",
    purple: "#9900ff",
    gray: "#808080",
  };

  for (const key of Object.keys(colors)) {
    generatedColorValues.push({
      cssClass: `${prefix}-${key}`,
      data: (
        <div className="flex justify-between align-center">
          {colors[key]}
          <span
            className={`block w-10 aspect-square ml-20 rounded border border-border-clr border-solid`}
            style={{ backgroundColor: colors[key] }}
          ></span>
        </div>
      ),
    });

    for (let i = 4; i >= 1; i--) {
      if (
        key !== "transparent" &&
        key !== "inherit" &&
        key !== "black" &&
        key !== "white"
      ) {
        generatedColorValues.push({
          cssClass: `${prefix}-${key}-${(5 - i) * 100}`,
          data: (
            <div className="flex justify-between align-center">
              {mix(i * 0.15, "white", colors[key])}
              <span
                className={`block w-10 aspect-square ml-20 rounded border border-border-clr border-solid`}
                style={{
                  backgroundColor: mix(i * 0.15, "white", colors[key]),
                }}
              ></span>
            </div>
          ),
        });
      }
    }

    for (let i = 5; i <= 9; i++) {
      if (
        key !== "transparent" &&
        key !== "inherit" &&
        key !== "black" &&
        key !== "white"
      ) {
        const colorSuffix = i * 100;

        generatedColorValues.push({
          cssClass: `${prefix}-${key}-${colorSuffix}`,
          data: (
            <div className="flex justify-between align-center">
              {mix(i * 0.1, "black", colors[key])}
              <span
                className={`block w-10 aspect-square ml-20 rounded border border-border-clr border-solid`}
                style={{
                  backgroundColor: mix(i * 0.1, "black", colors[key]),
                }}
              ></span>
            </div>
          ),
        });
      }
    }
  }

  return generatedColorValues.sort();
};

export const generateBorderWidthValues = (borderWidth) => {
  const generatedBorderWidthValues = [
    {
      cssClass: `${borderWidth}-none`,
      data: "0px",
    },
    {
      cssClass: `${borderWidth}`,
      data: "1px",
    },
  ];

  for (let i = 2; i < 21; i++) {
    generatedBorderWidthValues.push({
      cssClass: `${borderWidth}-${i}`,
      data: `${i}px`,
    });
  }
  return generatedBorderWidthValues;
};
