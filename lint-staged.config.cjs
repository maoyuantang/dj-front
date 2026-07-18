module.exports = {
  "*.{ts,vue}": ["eslint --fix"],
  "*.{scss,css,vue}": ["stylelint --fix"],
  "*.{js,json,md,vue,ts,scss,css}": ["prettier --write"],
};
