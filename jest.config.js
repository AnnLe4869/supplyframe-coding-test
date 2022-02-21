export default {
  transform: {
    "\\.ejs$": "jest-raw-loader",
    "^.+\\.[t|j]sx?$": "babel-jest",
  }
};
