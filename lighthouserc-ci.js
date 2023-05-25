module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/signin",
        "http://localhost:3000/signup",
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:pwa": "off",
        "first-contentful-paint": "off",
        "uses-responsive-images": ["error", { maxLength: 0 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
