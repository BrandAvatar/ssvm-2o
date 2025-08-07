const footerData = {
  marquee: {
    text: "work with us",
    repeatCount: 4,
    link: "/contact",
  },

  centerContent: {
    footerWrapperBg: "./assets/images/footer-area/footer-3-bg.png",
    subHeading: "Looking for a new talent?",
    email: "amul@xtracut.com",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/SSVMTransformIndia",
        id: "facebook",
      },
      // {
      //   name: "Twitter", 
      //   url: "https://twitter.com/ssvmschool",
      //   id: "twitter",
      // },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ssvmtransformingindia/",
        id: "instagram", 
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@ssvmtransformingindia",
        id: "youtube",
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
      text: ". All rights reserved SSVM",
    },
    backToTop: {
      text: "BACK TO TOP",
      target: "#header",
    },
    footerNav: [
      // {
      //   text: "Terms & Condition",
      //   url: "#",
      //   id: "terms",
      // },
      // {
      //   text: "Privacy Policy",
      //   url: "#",
      //   id: "privacy",
      // },
    ],
  },
};

export default footerData;
