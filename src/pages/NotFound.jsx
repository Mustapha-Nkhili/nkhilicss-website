import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerText = "404 - Nkhili CSS";
  }, []);
  
  return (
    <div className="flex justify-center items-center flex-column h-screen capitalize gap-10">
      <h1 className="text-9xl text-white">404</h1>
      <span className="text-light-periwinkle">page not found</span>
      <Link
        className="px-4 text-black py-2 bg-primary rounded font-medium"
        to="/"
      >
        go home
      </Link>
    </div>
  );
};

export default NotFound;
