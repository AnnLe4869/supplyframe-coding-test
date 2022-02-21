module.exports = {
  // moduleFileExtensions: [...defaults.moduleFileExtensions, "ejs"],
  transform: {
    "\\.ejs$": "jest-raw-loader",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
