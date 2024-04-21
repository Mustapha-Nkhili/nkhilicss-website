import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-sm text-light-periwinkle border-t border-t-border-clr border-t-solid mt-20 pt-5 text-center">
      Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
      <Link
        to="https://mustapha-nkhili.web.app"
        target="_blanck"
        className="text-primary"
      >
        Mustapha Nkhili
      </Link>
    </footer>
  );
};

export default Footer;
