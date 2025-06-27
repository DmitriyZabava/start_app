// eslint-disable-next-line
const { defineConfig } = require("eslint/config");

// eslint-disable-next-line
const globals = require("globals");

const {
	fixupConfigRules,
	fixupPluginRules,
	// eslint-disable-next-line
} = require("@eslint/compat");
// eslint-disable-next-line
const tsParser = require("@typescript-eslint/parser");
// eslint-disable-next-line
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
// eslint-disable-next-line
const react = require("eslint-plugin-react");
// eslint-disable-next-line
const reactHooks = require("eslint-plugin-react-hooks");
// eslint-disable-next-line
const js = require("@eslint/js");
// eslint-disable-next-line
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
	// eslint-disable-next-line
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
				__IS_DEV__: true,
				module: true,
			},

			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		extends: fixupConfigRules(
			compat.extends(
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended"
			)
		),

		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
			react: fixupPluginRules(react),
			"react-hooks": fixupPluginRules(reactHooks),
		},

		settings: {
			react: {
				version: "detect", // Автоматически определяет версию из `node_modules/react`
			},
		},

		rules: {
			quotes: ["error", "double"],
			indent: [2, 4],
			"@typescript-eslint/no-var-requires": 0,
			"react/jsx-indent": [2, 4],
			"react/jsx-indent-props": [2, 4],

			"react/jsx-filename-extension": [
				2,
				{
					extensions: [".js", ".jsx", ".tsx"],
				},
			],
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"react/require-default-props": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-props-no-spreading": "warn",
			"react/function-component-definition": "off",
			"react/no-deprecated": "off",
			"react/display-name": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			"import/no-unresolved": "off",
			"import/prefer-default-export": "off",
			"import/extensions": "off",
			"import/no-extraneous-dependencies": "off",
			"no-unused-vars": ["warn"],
			"no-shadow": "off",
			"no-underscore-dangle": "off",
			"object-curly-spacing": ["error", "always"],

			"max-len": [
				"error",
				{
					code: 100,
					ignoreComments: true,
				},
			],

			"jsx-ally/no-static-element-interactions": "off",
			"jsx-ally/click-events-have-key-events": "off",
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
			},

			sourceType: "script",
			parserOptions: {},
		},

		files: [
			"**/src/**/*.{test,stories}.{ts,tsx}",
			"**/.eslintrc.{js,cjs}",
		],

		rules: {
			"max-len": "off",
		},
	},
]);
