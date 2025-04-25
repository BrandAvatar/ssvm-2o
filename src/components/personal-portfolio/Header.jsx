"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menus from "@/constant/menus";
import Offcanvas from "@/components/Offcanvas";
import useSticky from "@/Hook/useSticky";
import HeaderTopbar from "@/components/personal-portfolio/HeaderTopbar";

const Header = () => {
  const [show, setShow] = useState(false);
  const [active, setSctive] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header
        className={`header-area position-relative z-2 ${
          isSticky ? "sticky" : ""
        }`}
        id="header"
      >
        <HeaderTopbar active={active} />
        <div className="header__navbar">
          <div className="container container--extend">
            <div className="row">
              <div className="col-12">
                <div className="header__main">
                  <div className="row align-items-center">
                    <div className="col-6 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBar">
                        <div
                          className="menuBar-toggle"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasLeft"
                          aria-controls="offcanvasLeft"
                          onClick={handleShow}
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        Menu
                        <i
                          className="fa-solid fa-info info-toggle d-xl-none"
                          onClick={() => setSctive(!active)}
                        ></i>
                      </div>
                    </div>
                    <div className="d-none d-lg-flex col-lg-8 col-xl-8 col-xxl-8">
                      <nav className="header__main-menu">
                        <ul>
                          {menus.map((menu) => (
                            <li
                              key={menu?.id}
                              className={
                                (menu?.subMenu?.length > 0 &&
                                  pathname === menu.link) ||
                                menu.id === 0
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href={menu.link || "#0"}>
                                {menu?.name}
                                {menu?.subMenu && menu?.subMenu.length > 0 && (
                                  <i className="fa-solid fa-angle-down"></i>
                                )}
                              </Link>
                              {menu?.subMenu && menu?.subMenu.length > 0 && (
                                <ul>
                                  {menu.subMenu.map((subMenuItem) => (
                                    <li
                                      key={subMenuItem.id}
                                      className={
                                        pathname === subMenuItem.link
                                          ? "active"
                                          : undefined
                                      }
                                    >
                                      <Link href={subMenuItem.link || "#0"}>
                                        {subMenuItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                    <div className="col-6 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBtns">
                        <Link
                          href="/contact"
                          className="common-btn common-btn--squire"
                        >
                          Let's Connect!
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                      <div className="text-end d-xl-none">
                        <Link className="header__main-logo" href="/">
                          <img src="./assets/images/logo.svg" alt="logo" />
                        </Link>
                      </div>
                      <button className="header__hamburger d-none">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas
        menus={menus}
        show={show}
        handleClose={handleClose}
        className="d-lg-none"
      />
    </>
  );
};

export default Header;
