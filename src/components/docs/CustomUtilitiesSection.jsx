import Code from "./Code";
import SectionHeader from "./SectionHeader";

const CustomUtilitiesSection = ({
  customUtilityRef,
  utilitySassMap,
  utilityMap,
  addUtilityToSassMapRef,
  addUtilityCode,
  changeUtilityValueRef,
  changeUtilityValueCode,
  isMapColor,
  utility,
}) => {
  return (
    <section
      id={`custom-${
        utility.includes(" ") ? utility.split(" ").join("-") : utility
      }`}
      ref={customUtilityRef}
      className="docs-section"
    >
      <SectionHeader
        title={`Custom ${
          utility.includes(" ") ? utility.split(" ").join("-") : utility
        }`}
      />
      <div className="docs-section" id="utility-sass-map" ref={utilitySassMap}>
        <h4 className="font-medium mt-5">Utility Sass Map</h4>
        <p className="text-sm text-light-periwinkle mt-2">
          This is the {utility} map, where we define the values for {utility}{" "}
          utilities in{" "}
          {isMapColor
            ? "sass/partials/_variables.scss"
            : "sass/partials/_utilities-maps.scss"}
          .
        </p>
        <Code code={utilityMap} language="javascript" />
      </div>

      <div
        className="docs-section"
        id="add-utility-to-sass-map"
        ref={addUtilityToSassMapRef}
      >
        <h4 className="font-medium mt-10">Add Utility to Sass Map</h4>
        <p className="text-sm text-light-periwinkle mt-2">
          Adding a new utility to the {utility} collection? Just set it into the
          existing map!
        </p>
        <Code code={addUtilityCode} language="javascript" />
      </div>

      <div
        className="docs-section"
        id="change-utility-value"
        ref={changeUtilityValueRef}
      >
        <h4 className="font-medium mt-10">Change a utility value</h4>
        <p className="text-sm text-light-periwinkle mt-2">
          Modifying a utility value? just a quick update to the property within
          the map does the trick!
        </p>
        <Code code={changeUtilityValueCode} language="javascript" />
      </div>
    </section>
  );
};

export default CustomUtilitiesSection;
