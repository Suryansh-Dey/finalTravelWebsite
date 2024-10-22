import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "./navbar.module.css";
import Sidebar from "./SideBar/SideBar";

const navLinks = [
  {
    title: "Personalised Trips",
    url: "/personalised-trips",
  },
  {
    title: "Corporate Trips",
    url: "/corporate-trips",
  },
  {
    title: "Group Trips",
    subLinks: [
      { title: "Pachmarhi", url: "/group-trips/pachmarhi" },
      { title: "Goa ", url: "/group-trips/goa" },
      { title: "Ladakh", url: "/group-trips/ladakh" },
      { title: "Kerala", url: "/group-trips/kerala" },
      { title: "Kashmir", url: "/group-trips/kashmir" },
      { title: "Manali", url: "/group-trips/manali" },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
];

const NavBar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={style.NavBar}>
      <div className={style.logoContainer} onClick={handleHome}>
        <img
          src="/LogoBtechTravelwala-removebg-preview.png"
          alt="BtechTravelWala"
        />
        <span>Btech Travelwala</span>
      </div>
      <div className={style.navLinksContainer}>
        {navLinks.map((link, index) => (
          <div className={style.navItem} key={index}>
            {link.subLinks ? (
              <div>
                <button
                  className={style.dropdownButton}
                  onClick={() => handleDropdownToggle(index)}
                >
                  {link.title}
                  {link.title === "Group Trips" && (
                    <FaMapMarkerAlt className={style.icon} />
                  )}
                </button>
                {openDropdownIndex === index && (
                  <div className={style.dropdownContent}>
                    {link.subLinks.map((subLink, subIndex) => (
                      <a
                        href={subLink.url}
                        key={subIndex}
                        className={style.subLink}
                      >
                        {subLink.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a href={link.url} className={style.navLink}>
                {link.title}
              </a>
            )}
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default NavBar;
