const pricingData = {
    title: "Choose your ideal plan. No obligation, cancel anytime.",
    subtitle: "{ flexible Pricing }",
    packages: [
      {
        id: "professional",
        title: "Professional",
        description: "Perfect if you just want to try",
        price: 19,
        frequency: "mo",
        features: [
          "For individuals",
          "1,000 API Calls/month",
          "Email customer support",
          "Storage 400MB",
          "AI Models: 5/month",
        ],
        link: "/contact",
      },
      {
        id: "advanced",
        title: "Advanced",
        description: "For those who need more power",
        price: 119,
        frequency: "mo",
        features: [
          "For individuals and small teams",
          "10,000 API Calls/month",
          "Priority email support",
          "Storage 1GB",
          "AI Models: 15/month",
        ],
        link: "/contact",
      },
      {
        id: "enterprise",
        title: "Enterprise",
        description: "For large teams and enterprises",
        price: 229,
        frequency: "mo",
        features: [
          "For large teams",
          "Unlimited API Calls",
          "Dedicated support",
          "Storage 5GB",
          "AI Models: 50/month",
        ],
        link: "/contact",
      },
    ],
  };
  
  export default pricingData;  