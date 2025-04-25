const footerData = {
  marquee: {
    text: "LET'S TALK",
    repeatCount: 4,
    link: "/contact",
  },

  centerSection: {
    avatar: {
      src: "./assets/images/footer-area/footer-mask-avatar.png",
      alt: "footer-mask-avatar",
    },
    socialLinks: [
      {
        name: "LINKEDIN",
        url: "#",
        id: "linkedin",
      },
      {
        name: "instagram",
        url: "#",
        id: "instagram",
      },
      {
        name: "facebook",
        url: "#",
        id: "facebook",
      },
      {
        name: "twitter",
        url: "#",
        id: "twitter",
      },
      {
        name: "Dribbble",
        url: "#",
        id: "dribbble",
      },
    ],
    hireButton: {
      text: "hire me",
      link: "/contact",
    },
  },

  bottomSection: {
    copyright: {
      text: "© 2025. All rights reserved Nicholls",
      year: new Date().getFullYear(),
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
