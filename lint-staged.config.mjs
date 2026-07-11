const lintStagedConfig = {
  "*.{js,mjs,cjs,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,json,md,yml,yaml}": "prettier --write",
};

export default lintStagedConfig;
