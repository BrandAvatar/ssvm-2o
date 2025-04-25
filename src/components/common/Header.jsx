"use client";
import React, { useState } from "react";
import menus from "@/constant/menus";
import Offcanvas from "@/components/Offcanvas";
import useSticky from "@/Hook/useSticky";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ className }) => {
  const [show, setShow] = useState(false);
  const [active, setSctive] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header
        className={`header-area position-relative z-1 ${
          isSticky ? "sticky" : ""
        }`}
        id="header"
      >
        <div className={`header__navbar header__navbar--extend ${className}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header__main">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-6 col-md-2 col-lg-2 col-xl-1">
                      <div className="d-flex justify-content-md-end">
                        <Link className="header__topbar-logo" href="/">
                          <img src="./assets/images/logo-v2.svg" alt="logo" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-0 col-md-0 col-lg-8 col-xl-10 d-none d-lg-flex">
                      <nav className={`header__main-menu header__main-menu--extend ${className}`}>
                        <ul>
                          {menus.map((menu) => (
                            <li
                              key={menu?.id}
                              // className={pathname === menu.link ? "active" : ""}
                              className={
                                pathname === menu.link ||
                                menu?.subMenu?.some(
                                  (sub) => sub.link === pathname
                                )
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
                    <div className="col-6 col-md-2 col-lg-2 col-xl-1">
                      <div className="header__main-menuBar justify-content-end justify-content-md-start">
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
