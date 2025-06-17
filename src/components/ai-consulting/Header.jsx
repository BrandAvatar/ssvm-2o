"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menus from "@/constant/menus";
import Offcanvas from "@/components/Offcanvas";
import useSticky from "@/Hook/useSticky";
import { PiArrowUpRightBold } from "react-icons/pi";

import Image from "next/image";

const Header = ({ className = '' }) => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isSticky = useSticky();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header
        className={`header-area pos-fix w-100 top-0 z-3 bg-transparent ${className}`}
        id="header"
      >
        <div className="fluid border-0 pt-2">
          <div className=" mx-autocontainer--extend w-100">
            <div className="row mx-1">
              <div className="col-12">
                <div className="header__main">
                  <div className="row justify-content-between align-items-center bg-transparent">
                    <div className="col-7 col-lg-1">
                      <div className=" ">
                        <Link className="header__topbar-logo position-relative d-none d-lg-block" href="/">
                          <video 
                          placeholder="blur"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ssvmlogo.png"
                          className="vid-logo"
                          src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/logo-vid.mp4"></video>
                        </Link>
                        <Link className="header__topbar-logo position-relative d-block d-lg-none
                        d-flex align-items-center
                        " href="/">
                          <video 
                          placeholder="blur"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ssvmlogo.png"
                          className="vid-logo"
                          src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/logo-vid.mp4"></video>
                          <Image
                            src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ssvma.png"
                            className="position-relative header-conclave-logo  img-fluid"
                            alt="logo"
                            fill
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-9 ">
                      <nav className="header__main-menu dark bg-transparent border-0 justify-content-around">
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
                    <div className="col-5 col-lg-1 p-0">
                      <div className="header__main-menuBar justify-content-end">
                        
                      <div className=" d-none d-lg-block">
                        <Link className="header__topbar-logo position-relative" href="/">
                          <Image
                            src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ssvma.png"
                            className="position-relative header-conclave-logo img-fluid"
                            alt="logo"
                            fill
                          />
                        </Link>
                        
                      
                      </div>
                        
                        <div
                          className="menuBar-toggle d-lg-none"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasLeft"
                          aria-controls="offcanvasLeft"
                          onClick={handleShow}
                        >
                          <span className="bg-black"></span>
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
        theme="dark"
        className="d-lg-none"
      />
    </>
  );
};

export default Header;
