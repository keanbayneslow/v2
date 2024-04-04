

import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();


  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/keanbayneslow/v2">
      
        <p>
          <span>Built by Kean Bayneslow &copy; {currentYear}</span>
        </p>
      </a>

    </footer>
  );
};

export default Footer;