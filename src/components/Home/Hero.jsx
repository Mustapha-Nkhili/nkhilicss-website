import Ring from "./Ring";
import curveImg from "../../assets/curve.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero relative flex justify-center items-center h-screen overflow-hidden">
      <div className="relative container z-40 mt-18 text-white text-center">
        <h1 className="text-4xl sm-text-5xl lg-text-6xl">
          Explore Endless Design Possibilities with{" "}
          <span className="relative">
            nkhilicss{" "}
            <img
              src={curveImg}
              className="absolute left-0 w-full"
              style={{ bottom: "-6px" }}
            />
          </span>
        </h1>
        <p className="mt-6 text-lg text-center text-light-periwinkle">
          Sleek, intuitive, and powerful front-end framework for faster and
          easier web development.
        </p>
        <Link
          to="docs/instalation"
          className="flex justify-center items-center bg-primary w-fit m-auto h-12 capitalize rounded-2 text-sm font-semibold pl-6 pr-6 mt-10"
        >
          get started
        </Link>
      </div>
      <div
        className="absolute aspect-square rounded-full"
        style={{
          width: "78rem",
          top: "94px",
          left: "50%",
          transform: "translateX(-50%)",
          border: "1px solid #cac6dd0d",
        }}
      >
        <Ring width={"65.875rem"} />
        <Ring width={"51.375rem"} />
        <Ring width={"36.125rem"} />
        <Ring width={"23.125rem"} />
      </div>
      <div className="blurry-bg blurry-bg-1 absolute rounded-full top-32 md-top-8 lg-top-7 aspect-square"></div>
      <div className="blurry-bg blurry-bg-2 absolute rounded-full top-16 md-top-4 lg-top-7 aspect-square"></div>

      <div className="background-circle-1 d-none absolute left-14 w-4 h-4 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-2 d-none absolute right-14 w-4 h-4 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-3 d-none absolute top-20 right-64 w-6 h-6 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-3 d-none absolute top-64 left-64 w-6 h-6 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-2 d-none absolute bottom-20 w-4 h-4 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-3 d-none absolute bottom-32 right-64 w-6 h-6 ml-1 mt-6 rounded-full lg-block"></div>
      <div className="background-circle-3 d-none absolute bottom-14 left-64 w-6 h-6 ml-1 mt-6 rounded-full lg-block"></div>
    </section>
  );
};

export default Hero;
