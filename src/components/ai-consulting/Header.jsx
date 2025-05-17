"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menus from "@/constant/menus";
import Offcanvas from "@/components/Offcanvas";
import useSticky from "@/Hook/useSticky";
import { PiArrowUpRightBold } from "react-icons/pi";

import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header
        className={`header-area position-fixed w-100 top-0 z-3 bg-transparent ${
          isSticky ? "sticky" : ""
        }`}
        id="header"
      >
        <div className="fluid border-0 pt-2">
          <div className="container container--extend">
            <div className="row">
              <div className="col-12">
                <div className="header__main ">
                  <div className="row justify-content-between align-items-center bg-transparent">
                    <div className="col-6 col-lg-3 col-xl-3 col-xxl-2">
                      <div className="header__main-menuBtns text-start d-flex justify-content-between align-items-center ">
                        <Link className="header__topbar-logo position-relative" href="/">
                          <Image
                            src="/assets/images/newlogo.png"
                            className="position-relative header-conclave-logo"
                            alt="logo"
                            fill
                          />
                        </Link>
                        
                      
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-9 col-xl-9 col-xxl-9">
                      <nav className="header__main-menu dark bg-transparent border-0">
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
                    <div className="col-6 col-lg-1 col-xl-1 col-xxl-1">
                      <div className="header__main-menuBar justify-content-end">
                        
                          {/* Contact Us */}
                          {/* <div className="button-icon-wrap">
                            <PiArrowUpRightBold className="button-icon icon button-icon-one" />
                            <PiArrowUpRightBold className="button-icon icon button-icon-two" />
                          </div> */}
                        
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
