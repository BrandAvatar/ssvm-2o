"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menus from "@/constant/menus";
import Offcanvas from "@/components/Offcanvas";
import useSticky from "@/Hook/useSticky";
import { PiArrowUpRightBold } from "react-icons/pi";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header
        className={`header-area position-absolute w-100 top-0 z-3 bg-transparent ${
          isSticky ? "sticky" : ""
        }`}
        id="header"
      >
        <div className="header__navbar header__ai fluid border-0">
          <div className="container container--extend">
            <div className="row">
              <div className="col-12">
                <div className="header__main">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-6 col-lg-1 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBtns d-block text-start">
                        <Link className="header__topbar-logo" href="/">
                          <img src="./assets/images/logo-v3.svg" alt="logo" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-8 col-xl-8 col-xxl-8">
                      <nav className="header__main-menu dark bg-transparent">
                        <ul>
                          {menus.map((menu) => (
                            <li
                              key={menu?.id}
                              className={
                                menu?.subMenu?.some(
                                  (sub) => pathname === sub.link
                                ) || menu.id === 0
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
                      <div className="header__main-menuBar justify-content-end">
                        <Link
                          href="/contact"
                          className="common-btn-two bg-lime d-none d-lg-flex"
                        >
                          Contact Us
                          <div className="button-icon-wrap">
                            <PiArrowUpRightBold className="button-icon icon button-icon-one" />
                            <PiArrowUpRightBold className="button-icon icon button-icon-two" />
                          </div>
                        </Link>
                        <div
                          className="menuBar-toggle d-lg-none"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasLeft"
                          aria-controls="offcanvasLeft"
                          onClick={handleShow}
                        >
                          <span className="bg-white"></span>
                          <span className="bg-white"></span>
                          <span className="bg-white"></span>
                        </div>
                      </div>
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
        theme="dark"
        className="d-lg-none"
      />
    </>
  );
};

export default Header;
