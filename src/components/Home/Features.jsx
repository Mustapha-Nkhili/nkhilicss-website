import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons/faMobileScreenButton";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons/faGaugeHigh";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

const Features = () => {
  const features = [
    {
      title: "Fully customizable",
      text: "Unlock Infinite Possibilities: Customize Everything Seamlessly with Sass",
      icon: faScrewdriverWrench,
    },
    {
      title: "Perfectly Responsive",
      text: "Crafted with Mobile-first Design Principles for Seamless User Experience Across Devices",
      icon: faMobileScreenButton,
    },
    {
      title: "Lightweight",
      text: "Experience the Speed of Simplicity: Lightweight and Lightning-fast Framework",
      icon: faGaugeHigh,
    },
    {
      title: "Dynamic Design",
      text: "Elevate Your Layouts: Harness the Power of Flexbox, and Grid for Exquisite and Dynamic Web Design",
      icon: faCss3,
    },
    {
      title: "Developer Experience",
      text: "Guaranteed to boost your productivity when building your app or website.",
      icon: faBolt,
    },
    {
      title: "CDN run time build",
      text: "Experience the Convenience of Instant Integration with NkhiliCSS via a Single Line of CDN Import",
      icon: faCode,
    },
  ];
  
  return (
    <section className="container pt-20">
      <h2 className="text-h1 text-center text-white max-w-sm m-auto">
        Simplify Your Styling: Level Up with NkhiliCSS Framework
      </h2>
      <div className="features grid text-white gap-7 mt-10 mb-10">
        {features.map((feature, index) => (
          <div className="feature p-5 rounded" key={feature + index}>
            <div className="flex justify-center items-center rounded mb-5 w-10 aspect-square text-light-periwinkle bg-primary">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="text-base font-semibold capitalize">
              {feature.title}
            </h3>
            <p className="text-sm text-medium text-light-periwinkle mt-4">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
