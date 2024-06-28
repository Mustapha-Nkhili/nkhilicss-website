import {
  faArrowLeft,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = ({ prevPage, nextPage }) => {
  return (
    <footer className="text-sm text-light-periwinkle  mt-20">
      <div
        className={`${
          prevPage ? "flex justify-between items-center" : "grid"
        } mb-10`}
      >
        {prevPage && (
          <Link
            to={`/docs/${
              prevPage.includes(" ") ? prevPage.split(" ").join("-") : prevPage
            }`}
            className="rounded bg-light-periwinkle pt-2 pb-2 pl-5 pr-5 text-black mb-5 font-semibold capitalize"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> {prevPage}
          </Link>
        )}

        {nextPage && (
          <Link
            to={`/docs/${
              nextPage.includes(" ") ? nextPage.split(" ").join("-") : nextPage
            }`}
            className={`rounded bg-light-periwinkle pt-2 pb-2 pl-5 pr-5 text-black mb-5 font-semibold capitalize ${
              !prevPage && "self-end"
            }`}
          >
            {nextPage} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        )}
      </div>
      <div className="border-t border-t-border-clr border-t-solid pt-8 text-center">
        Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <Link
          to="https://mustapha-nkhili.web.app"
          target="_blanck"
          className="text-primary"
        >
          Mustapha Nkhili
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
