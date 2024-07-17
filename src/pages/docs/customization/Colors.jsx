import { useRef } from "react";
import DocsHeader from "../../../components/docs/DocsHeader";
import Code from "../../../components/docs/Code";
import OnThisPage from "../../../components/docs/OnThisPage";
import Footer from "../../../components/docs/Footer";
import SectionHeader from "../../../components/docs/SectionHeader";
import { mix } from "polished";

const Colors = () => {
  const overviewRef = useRef(null);
  const defaultColorPaletteRef = useRef(null);
  const CustomColorsRef = useRef(null);
  const colorPaletteMapRef = useRef(null);
  const extendColorPaletteRef = useRef(null);
  const modifyDefaultColors = useRef(null);

  const onThisPage = [
    {
      label: "Overview",
      ref: overviewRef,
    },
    {
      label: "Default color palette",
      ref: defaultColorPaletteRef,
    },
    {
      label: "Custom colors",
      ref: CustomColorsRef,
      subLabels: [
        { ref: colorPaletteMapRef, label: "color palette Map" },
        { ref: extendColorPaletteRef, label: "Extend color palette" },
        { ref: modifyDefaultColors, label: "Modify default colors" },
      ],
    },
  ];

  const colors = {
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

  const colorMap = `
  // Theme Colors
  $primary: #326dee !default;
  $secondary: #1ac886 !default;
  $error: #d32752 !default;
  $info: #f6c31c !default;
  $blue: #1919e6 !default;
  $red: #e61919 !default;
  $yellow: #e6e619 !default;
  $green: #19e635 !default;
  $orange: #ffa600 !default;
  $purple: #9900ff !default;
  $gray: #808080 !default;
  $black: black !default;
  $white: white !default;
  
  // colors Palette
  $colors: (
    "primary": $primary,
    "secondary": $secondary,
    "error": $error,
    "info": $info,
    "transparent": transparent,
    "inherit": inherit,
    "blue": $blue,
    "red": $red,
    "yellow": $yellow,
    "green": $green,
    "orange": $orange,
    "purple": $purple,
    "gray": $gray,
    "black": $black,
    "white": $white,
  ) !default;
  `;

  const addUtilityCode = `
  @use "../node_modules/nkhilicss/sass/nkhilicss" with (
    // Your custom variables
    $custom-colors: (
    "yourCustomColor": itsValue,
    ) 
  );
  `;

  const changeUtilityValueCode = `
  @use "../node_modules/nkhilicss/sass/nkhilicss" with (
    // Your custom variables
    $primary: "Your Custom Value for primary color",
  );
  `;

  return (
    <>
      <div className="doc-content p-5 mb-10">
        <DocsHeader
          title="customization"
          pageTitle="Customizing Color Palette"
          pageDesc="To customize the default color palette for your project, you can extend the existing palette by defining your own colors."
        />
        <section className="docs-section" id="overview" ref={overviewRef}>
          <SectionHeader
            title="Overview"
            description="In this guide, we will walk you through the process of customizing the default color palette in your Nkhili CSS project. Customizing the color palette allows you to create a unique visual identity for your project, ensuring consistency and coherence across your design. By the end of this guide, you will have a clear understanding of how to extend Nkhili CSS default color palette, and use your custom colors in your project."
          />
        </section>
        <section
          className="docs-section"
          id="default-color-palette"
          ref={defaultColorPaletteRef}
        >
          <SectionHeader title="Default color palette" />
          <div className="flex justify-center items-center md-flex-column gap-5 mb-5 mt-10 flex-wrap">
            {Object.keys(colors).map((key, index) => (
              <div key={key + index}>
                <span className="capitalize">{key}</span>
                <ul className="flex-column md-flex-row flex justify-center items-center gap-1 md-gap-5 mt-3">
                  {Array.from({ length: 4 }, (_, i) => (
                    <li
                      key={`100-${i}`}
                      className="flex justify-center items-center border border-solid border-border-clr text-xs w-14 h-14 mb-5 rounded"
                      style={{
                        backgroundColor: mix(
                          (4 - i) * 0.15,
                          "white",
                          colors[key]
                        ),
                      }}
                    >
                      {100 * (i + 1)}
                    </li>
                  ))}
                  {Array.from({ length: 5 }, (_, i) => (
                    <li
                      key={`500-${i}`}
                      className="flex justify-center items-center border border-solid border-border-clr text-xs w-14 h-14 mb-5 rounded"
                      style={{
                        backgroundColor: mix(
                          (5 + i) * 0.1,
                          "black",
                          colors[key]
                        ),
                      }}
                    >
                      {500 + 100 * i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-light-periwinkle">
            By default, these colors are universally accessible across the
            framework, seamlessly integrating into text, border, and background
            color utilities, and more.
          </p>
        </section>

        <section
          className="docs-section"
          id="custom-colors"
          ref={CustomColorsRef}
        >
          <SectionHeader
            title="Custom colors"
            description="Effortlessly customize the colors to perfectly suit your preferences."
          />
          <div
            className="docs-section"
            id="color-palette-map"
            ref={colorPaletteMapRef}
          >
            <h4 className="capitalize font-medium mt-4">Color palette map</h4>
            <Code code={colorMap} language="javaScript" />
          </div>
          <div
            className="docs-section"
            id="extend-color-palette"
            ref={extendColorPaletteRef}
          >
            <h4 className="capitalize font-medium mt-4">
              Extend color palette
            </h4>
            <Code code={addUtilityCode} language="javaScript" />
          </div>
          <div
            className="docs-section"
            id="modify-default-colors"
            ref={modifyDefaultColors}
          >
            <h4 className="capitalize font-medium mt-4">
              Modify default colors
            </h4>
            <Code code={changeUtilityValueCode} language="javaScript" />
          </div>
        </section>

        <Footer prevPage={"utilities configuration"} nextPage={"spacing"} />
      </div>
      <OnThisPage onThisPage={onThisPage} />
    </>
  );
};

export default Colors;
