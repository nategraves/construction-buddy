module.exports = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["node_modules", "dist"],
  moduleDirectories: ["node_modules", "src"],
};
