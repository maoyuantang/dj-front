module.exports = {
  root: true,
  env: { es2022: true, node: true, browser: true },
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".vue"],
    parser: require.resolve("@typescript-eslint/parser"),
  },
  plugins: ["@typescript-eslint", "vue"],
  extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
