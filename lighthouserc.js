module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/signin",
        "http://localhost:3000/signup",
      ],
      numberOfRuns: 1,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
