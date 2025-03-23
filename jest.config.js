module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest", // Transform `.js` files with Babel for JSX
  },
};
