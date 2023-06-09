module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint-config-prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-essential',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: [],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
		'@typescript-eslint/no-explicit-any': 'off',
		'vue/multi-word-component-names': 0,
		'vue/v-on-event-hyphenation': 0,
		'vue/no-parsing-error': 0,
	},
};
