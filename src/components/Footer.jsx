import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="home-footer text-sm font-medium text-center pt-7 pb-7 pl-5 pr-5 text-light-periwinkle">
      <p>Released under the MIT License.</p>
      <p className="mt-1 mb-10">
        Ⓒ {new Date().getFullYear()} NkhiliCSS All Right Reserved
      </p>
      <span>
        Made with <FontAwesomeIcon className="ml-1 mr-1" icon={faHeart} /> by{" "}
        <Link
          className="text-primary"
          target="_blanck"
          to="https://github.com/Mustapha-Nkhili/"
        >
          Mustapha Nkhili
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
