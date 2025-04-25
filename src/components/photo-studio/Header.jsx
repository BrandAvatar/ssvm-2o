"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Offcanvas from "@/components/Offcanvas";
import Link from "next/link";
import menus from "@/constant/menus";
import useSticky from "@/Hook/useSticky";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header
        className={`header-area bg-transparent position-relative z-2 ${isSticky ? "sticky" : ""}`}
        id="header"
      >
        <div className="header__navbar header__ai border-0">
          <div className="container container--extend">
            <div className="row">
              <div className="col-12">
                <div className="header__main">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-6 col-lg-1 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBtns text-start">
                        <Link href="/" className="header__topbar-logo">
                          <img
                            src="./assets/images/logo-light.svg"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="text-end d-flex justify-content-start d-xl-none">
                        <Link href="/" className="header__main-logo">
                          <img
                            src="./assets/images/logo-light.svg"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <button className="header__hamburger d-none">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                    <div className="d-none d-lg-block col-lg-8 col-xl-8 col-xxl-8">
                      <nav className="header__main-menu dark bg-transparent">
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
                                        pathname === subMenuItem.link || (subMenuItem.id === 0 && menu?.id === 0)
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
                        Menu
                        <div
                          className="menuBar-toggle circle"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasLeft"
                          aria-controls="offcanvasLeft"
                          onClick={handleShow}
                        >
                          <span className="bg-black"></span>
                          <span className="bg-black"></span>
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
        className="d-lg-none"
        theme="dark"
      />
    </>
  );
};

export default Header;