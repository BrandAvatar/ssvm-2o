"use client";
import React, { useEffect, useState } from "react";
import Offcanvas from "@/components/Offcanvas";
import menus from "@/constant/menus";
import Link from "next/link";
import FourDots from "@/icons/FourDots";
import useSticky from "@/Hook/useSticky";

const Header = () => {
  const [show, setShow] = useState(false);
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
        <div className="header__navbar fluid border-bottom">
          <div className="container container--extend">
            <div className="row">
              <div className="col-12">
                <div className="header__main">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-6 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBtns">
                        <Link href="/contact" className="common-btn contact">
                          <FourDots size={15} />
                          Contact
                        </Link>
                      </div>
                      <div className="text-end d-flex justify-content-start d-xl-none">
                        <Link className="header__main-logo" href="/">
                          <img
                            src="./assets/images/logo-light.svg"
                            alt="logo"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-8 col-xl-8 col-xxl-8 text-center">
                      <Link className="header__main-logo" href="/">
                        <img src="./assets/images/logo-light.svg" alt="logo" />
                      </Link>
                    </div>

                    <div className="col-6 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="header__main-menuBar justify-content-end">
                        Menu
                        <div
                          className="menuBar-toggle"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasLeft"
                          aria-controls="offcanvasLeft"
                          onClick={handleShow}
                        >
                          <span className="bg-white opacity-50"></span>
                          <span className="bg-white opacity-50"></span>
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
      />
    </>
  );
};

export default Header;
