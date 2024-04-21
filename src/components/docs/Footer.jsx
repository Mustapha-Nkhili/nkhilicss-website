import {
  faArrowLeft,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ prevPage, nextPage }) => {
  const [prevPageLink, setPrevPageLink] = useState(prevPage);
  const [nextPageLink, setNextPageLink] = useState(nextPage);

  useEffect(() => {
    if (prevPageLink && prevPageLink.includes(" ")) {
      setPrevPageLink((prev) => prev.split(" ").join("-"));
      console.log(prevPageLink);
    }

    if (nextPageLink && nextPageLink.includes(" ")) {
      setNextPageLink((prev) => prev.split(" ").join("-"));
    }
  }, [prevPageLink, nextPageLink]);


  return (
    <footer className="text-sm text-light-periwinkle  mt-20">
      <div
        className={`${prevPage ? "flex justify-between items-center" : "grid"}`}
      >
        {prevPage && (
          <Link
            to={`/docs/${prevPageLink}`}
            className="rounded bg-light-periwinkle pt-2 pb-2 pl-5 pr-5 text-black mb-5 font-semibold capitalize"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> {prevPage}
          </Link>
        )}

        {nextPage && (
          <Link
            to={`/docs/${nextPageLink}`}
            className={`rounded bg-light-periwinkle pt-2 pb-2 pl-5 pr-5 text-black mb-5 font-semibold capitalize ${
              !prevPage && "self-end"
            }`}
          >
            {nextPage} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        )}
      </div>
      <div className="border-t border-t-border-clr border-t-solid pt-5 text-center">
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
