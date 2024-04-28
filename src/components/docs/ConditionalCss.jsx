import Code from "./Code";
import SectionHeader from "./SectionHeader";

const ConditionalCss = ({
  headerRef,
  subTitle1Ref,
  subTitle2Ref,
  hoverCode,
  breakpointsCode,
  utility,
}) => {
  return (
    <section id="executing-under-certain-conditions" ref={headerRef}>
      <SectionHeader title="Executing under certain conditions" />
      <h4
        className="font-medium mt-5"
        id="hover-focus-and-other-states"
        ref={subTitle1Ref}
      >
        Hover, focus, and other states
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        nkhilicss offers the ability to conditionally employ utility classes by
        leveraging variant modifiers for different states. For instance, with{" "}
        <span className="text-primary">&quot;hover-{utility}&quot;</span> , you
        can apply the{" "}
        <span className="text-primary">&quot;{utility}&quot;</span> utility
        exclusively during hover events.
      </p>
      <Code code={hoverCode} language="html" />

      <h4
        className="font-medium mt-10"
        id="Breakpoints-and-media-queries"
        ref={subTitle2Ref}
      >
        Breakpoints & Media queries
      </h4>
      <p className="text-sm text-light-periwinkle mt-2">
        To target responsive breakpoints precisely, use variant modifiers like
        <span className="text-primary">&quot;lg-{utility}&quot;</span> to
        implement the{" "}
        <span className="text-primary">&quot;{utility}&quot;</span> utility
        exclusively on large-sized screens and above. This ensures your design
        adapts seamlessly across different device sizes.
      </p>
      <Code code={breakpointsCode} language="html" />
    </section>
  );
};

export default ConditionalCss;
