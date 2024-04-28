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
}) => {
  return (
    <section id="custom-ratios" ref={customUtilityRef}>
      <SectionHeader
        title="Custom ratios"
        description="Within your custom.scss file, you'll import nkhilicss's source Sass files. You have two options: either include all of nkhilicss, or selectively pick the parts you need. We recommend the latter approach."
      />
      <h4
        className="font-medium mt-10"
        id="utility-sass-map"
        ref={utilitySassMap}
      >
        Utility Sass Map
      </h4>
      <Code code={utilityMap} language="javascript" />

      <h4
        className="font-medium mt-10"
        id="add-utility-to-sass-map"
        ref={addUtilityToSassMapRef}
      >
        Add Utility to Sass Map
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        Adding a new utility to the aspect ratio collection? Just set it into
        the existing map!
      </p>
      <Code code={addUtilityCode} language="javascript" />

      <h4
        className="font-medium mt-10"
        id="change-utility-value"
        ref={changeUtilityValueRef}
      >
        Change utility value
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
