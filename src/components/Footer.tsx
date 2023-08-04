import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="w-screen bg-gray-50">
      <hr className="mb-4 h-px border-0 bg-gray-200" />
      <div className="mb-4 flex flex-row flex-wrap place-content-center items-center text-center">
        <p className="px-2 text-lg">Copyright © Alexandra Chloe Winkel</p>
        <div>
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/alexandra-chloe-winkel-ab5040180/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="px-4"
              icon={faLinkedin}
            />
          </a>
          <a
            aria-label="Behance"
            href="https://www.behance.net/winkelchloe"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="px-4"
              icon={faBehance}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
