import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../assets/logoo.jpg";
import "../styles/Navbar.css";
import {
  LiaAngleDownSolid,
  LiaAngleUpSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setDropdownStates({});
  };

  const renderIcon = (name) => (
    <span className="dropdown-arrow">
      {dropdownStates[name] ? (
        <LiaAngleUpSolid className="ms-1" style={{ fontSize: "0.8rem" }} />
      ) : (
        <LiaAngleDownSolid className="ms-1" style={{ fontSize: "0.8rem" }} />
      )}
    </span>
  );

  const renderDropdownItem = (label, link) => (
    <Link
      className="dropdown-item d-flex justify-content-between align-items-center"
      to={link}
      onClick={closeNavbar}
    >
      {label}
      <LiaLongArrowAltRightSolid className="dropdown-hover-arrow" />
    </Link>
  );

  const menuItems = [
    {
      name: "company",
      label: "Company Profile",
      items: [
        ["Our Approach", "/profile/OurApproach"],
        ["Who We Are", "/profile/whoweare"],
        ["Blogs", "/profile/blogs"],
        ["Client Reviews", "/profile/reviews"],
      ],
    },
    {
      name: "website",
      label: "Website Development",
      items: [
        ["WordPress Website", "/services/design"],
        ["Custom Web Development", "/services/custom"],
        ["PHP Website Development", "/services/development"],
        ["CMS Web Development", "/services/marketing"],
        ["React Web Development", "/services/mern"],
        ["Shopify Web Designing", "/services/ecommerce"],
        ["SEO Web Designing", "/services/seo"],
        ["Website Redesigning", "/services/redesign"],
        ["Landing Page Design", "/services/landing"],
        ["Web Application Development", "/services/webapp"],
      ],
    },
    {
      name: "revenue",
      label: "Revenue Marketing & CRO",
      items: [
        ["Performance Marketing", "/services/performance"],
        ["B2B Marketing", "/services/b2b"],
        ["Lead Generations", "/services/leads"],
        ["AI Performance Marketing Services", "/services/ai-performance"],
        ["Ads Management", "/services/ads"],
        ["Internet Marketing", "/services/internet"],
        ["Demand Generation", "/services/demand"],
        ["B2B Lead Generation", "/services/b2b-leads"],
        ["D2C Lead Generation" ,"/D2C Marketing", "/services/d2c"],
          ["B2C Marketing", "/services/b2c-marketing"]
      ],
    },
    {
      name: "digital",
      label: "Digital Marketing",
      items: [
        ["Content Marketing", "/services/content"],
        ["CRM Optimizations", "/services/crm"],
        ["Email Marketing", "/services/email"],
        ["Video Marketing", "/services/video"],
        ["Social Media Ads", "/services/social"],
        ["Google Ads", "/services/google"],
        ["Google AdWords/PPC", "/services/google-ads"],
        ["SMO", "/services/smo"],
        ["SMM", "/services/smm"],
      ],
    },
    {
      name: "seo",
      label: "Guaranteed SEO",
      items: [
        ["AI Digital Marketing Services", "/services/ai-digital"],
        ["E-Commerce SEO Services", "/services/ecommerce-seo"],
        ["Digital Marketing Services", "/services/digital-seo"],
        ["Enterprise SEO Services", "/services/enterprise-seo"],
        ["AI SEO Services", "/services/ai-seo"],
      ],
    },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (!navbar) return;
      navbar.style.top = window.scrollY < lastScrollY ? "0" : "-10px";
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar m-0 p-0 navbar-expand-lg px-3 shadow bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src={logoo}
            alt="logo"
            width="70"
            height="70"
            className="rounded-circle d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isNavbarOpen}
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${isNavbarOpen ? " show" : ""}`}
        >
          <ul className="navbar-nav mx-auto mb-lg-0 d-flex flex-column flex-lg-row gap-2 shadow bg-white rounded-pill p-2 responsive-navbar">
            {menuItems.map((menu) => (
              <li
                className={`nav-item dropdown ${
                  dropdownStates[menu.name] ? "show" : ""
                }`}
                key={menu.name}
                onMouseEnter={() =>
                  !isMobile && setDropdownStates({ [menu.name]: true })
                }
                onMouseLeave={() =>
                  !isMobile && setDropdownStates({ [menu.name]: false })
                }
              >
                <span
                  className="nav-link d-flex align-items-center"
                  role="button"
                  onClick={() => isMobile && toggleDropdown(menu.name)}
                >
                  {menu.label}
                  {renderIcon(menu.name)}
                </span>
                {(dropdownStates[menu.name] ||
                  (!isMobile && dropdownStates[menu.name])) && (
                  <ul className="dropdown-menu show">
                    {menu.items.map(([label, link]) => (
                      <li key={label}>{renderDropdownItem(label, link)}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-btn">
            <Link
              to="/boost"
              className="text-white text-decoration-none"
              onClick={closeNavbar}
            >
              free SEO audit!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
