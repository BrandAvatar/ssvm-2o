const footerData = {
  marquee: {
    text: "work with us",
    repeatCount: 4,
    link: "/contact",
  },

  centerContent: {
    footerWrapperBg: "./assets/images/footer-area/footer-3-bg.png",
    subHeading: "Looking for a new talent?",
    email: "nicholls@gmail.com",
    socialLinks: [
      {
        name: "Facebook",
        url: "#",
        id: "facebook",
      },
      {
        name: "Twitter",
        url: "#",
        id: "twitter",
      },
      {
        name: "Instagram",
        url: "#",
        id: "instagram",
      },
      {
        name: "Dribbble",
        url: "#",
        id: "dribbble",
      },
    ],
    contactButton: {
      text: "Let`s Connect",
      link: "/contact",
    },
  },

  bottomContent: {
    copyright: {
      symbol: "©",
      year: new Date().getFullYear(),
      text: ". All rights reserved Nicholls",
    },
    backToTop: {
      text: "Back To Top",
      target: "#header",
    },
    footerNav: [
      {
        text: "Terms & Condition",
        url: "#",
        id: "terms",
      },
      {
        text: "Privacy Policy",
        url: "#",
        id: "privacy",
      },
    ],
  },
};

export default footerData;
