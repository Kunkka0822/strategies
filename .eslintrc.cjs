module.exports = {
  rules: {
    "no-console": "error",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    // Disable all formatting rules.
    "prettier",
  ],
  overrides: [
    {
      files: "test/**/*.mjs",
      rules: {
        "no-console": ["off"],
      },
    },
  ],
};
