import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-screen bg-gray-50">
      <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-wrap flex-row place-content-center items-center text-center mb-4">
        <p className="px-2 text-l">{"Copyright © Alexandra Chloe Winkel"}</p>
        <div>
          <a
            href="https://www.linkedin.com/in/alexandra-chloe-winkel-ab5040180/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="px-4" />
          </a>
          <a href="https://www.behance.net/winkelchloe" target="_blank">
            <FontAwesomeIcon icon={faBehance} className="px-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
