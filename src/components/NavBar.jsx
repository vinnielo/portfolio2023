import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from '../assets/Vinnie-Lopez-black-low-res.png'

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },

  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/apps",
    text: "Applications",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
];

const socialLinks = [
  {
    id: 1,
    url: "https://github.com/vinnielo",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
];

const Navbar = ({current, setCurrent}) => {
  const [showLinks, setShowLinks] = useState(false);
  
  // for the links-container
  const linksContainerRef = useRef(null);
  // for the nav-links
  const linksRef = useRef(null);

  // useLocation to get path
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  useEffect(() => {
    if (location.pathname === "/about") {
      setCurrent("About");
    } else if (location.pathname === "/apps") {
      setCurrent("Applications");
    } else if (location.pathname === "/contact") {
      setCurrent("Contact");
    } else {
      setCurrent("home");
    }
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="" width={225} />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {links.map((item) => (
              <li
                key={item.id}
                className={current === item.text ? "underline" : ""}
              >
                <a href={item.url} className="font-face-kausan">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="social-icons">
          {socialLinks.map((item) => (
            <li key={item.id} className="px-3">
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
