// @ts-check
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...pluginVue.configs["flat/recommended"],
];
