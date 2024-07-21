import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const generatePageTitle = () => {
      const title = location.pathname.split("/").pop();

      if (title) {
        const formattedTitle = title.split("-").join(" ");
        
        return `${
          formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1)
        } - Nkhili CSS`;
      }

      return `Nkhili CSS - Build fast and responsive sites`;
    };

    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = generatePageTitle();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
