import headerToppData from '@/constant/personal-portfolio/headerTop-data';
import Link from 'next/link';

const HeaderTopbar = ({active}) => {
  return (
    <div className={`header__topbar ${active ? 'active': ''}`}>
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="header__topbar-wrapper">
              <div className="row">
                <div className="col-xl-3 p-0">
                  <div className="header__topbar-left">
                    <div className="phone header__topbar-item">
                      {headerToppData?.phone?.label}:
                      <Link href={`tel:${headerToppData?.phone?.number}`}>{headerToppData?.phone?.number}</Link>
                    </div>
                    <div className="email header__topbar-item">
                      {headerToppData?.email.label}:
                      <Link href={`mailto:${headerToppData?.email?.address}`}>{headerToppData?.email?.address}</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 p-0">
                  <div className="header__topbar-center header__topbar-item d-none d-xl-flex">
                    <Link className="header__topbar-logo" href={headerToppData?.homeLink}>
                      <img src={headerToppData?.logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 p-0">
                  <div className="header__topbar-right">
                    <div className="address header__topbar-item">
                      {headerToppData?.address?.label}:
                      <span>{headerToppData?.address?.value}</span>
                    </div>
                    <div className="social">
                      <div className="header__topbar-item">share:</div>
                      <ul>
                        {headerToppData?.socialLinks.map((link, index) => (
                          <li key={index}>
                            <Link href={link.url}>
                              <i className={`fa-brands ${link?.icon}`}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
