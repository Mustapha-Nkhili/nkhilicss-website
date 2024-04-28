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
  utility,
}) => {
  return (
    <section id={`custom-${utility}`} ref={customUtilityRef}>
      <SectionHeader title={`Custom ${utility}`} />
      <h4
        className="font-medium mt-5"
        id="utility-sass-map"
        ref={utilitySassMap}
      >
        Utility Sass Map
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        This is the {utility} map, where we define the values for {utility}{" "}
        utilities in sass/_maps.scss.
      </p>
      <Code code={utilityMap} language="javascript" />

      <h4
        className="font-medium mt-10"
        id="add-utility-to-sass-map"
        ref={addUtilityToSassMapRef}
      >
        Add Utility to Sass Map
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        Adding a new utility to the {utility} collection? Just set it into the
        existing map!
      </p>
      <Code code={addUtilityCode} language="javascript" />

      <h4
        className="font-medium mt-10"
        id="change-utility-value"
        ref={changeUtilityValueRef}
      >
        Change a utility value
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        Modifying a utility value? just a quick update to the property within
        the map does the trick!
      </p>
      <Code code={changeUtilityValueCode} language="javascript" />
    </section>
  );
};

export default CustomUtilitiesSection;
