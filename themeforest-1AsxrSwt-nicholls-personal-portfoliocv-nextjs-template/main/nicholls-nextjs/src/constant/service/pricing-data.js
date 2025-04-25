const pricingData = {
  marquee: {
    text: "pricing plan",
    repeatCount: 4,
    link: "/contact",
  },
  plans: [
    {
      id: 1,
      title: "Silver Pack",
      price: 100.0,
      period: "Per/monta",
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
      btnLink: "/contact",
      btnText: "Start my project now",
      isActive: false,
    },
    {
      id: 2,
      title: "Gold Pack",
      price: 200.0,
      period: "Per/monta",
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
      btnLink: "/contact",
      btnText: "Start my project now",
      isActive: true,
    },
    {
      id: 3,
      title: "Platinum Pack",
      price: 300.0,
      period: "Per/monta",
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
      btnLink: "/contact",
      btnText: "Start my project now",
      isActive: false,
    },
  ],
};

export default pricingData;
