import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	{
		ignores: ['**/node_modules/', '**/build/'],
	},
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended'
	),
	{
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
			},
			project: './tsconfig.json',
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			prettier,
			'@stylistic/js': stylisticJs,
		},
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			ecmaVersion: 2021,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			// General
			semi: ['error', 'never'],
			'no-tabs': 0,
			'no-unused-vars': 'warn',
			'no-console': ['warn', { allow: ['info', 'error'] }],
			'no-debugger': 'warn',
			'no-alert': 'warn',
			'no-undef': 'warn',
			'no-var': 'warn',
			'no-unreachable': 'warn',
			'no-else-return': 'warn',

			// React
			'react/prop-types': 'off',
			'react/destructuring-assignment': ['warn', 'always'],
			'react/jsx-uses-react': 'off',
			'react/jsx-no-undef': ['error', { allowGlobals: true }],
			'react/react-in-jsx-scope': 'off',
			'react/jsx-boolean-value': ['warn', 'never'],
			'react/jsx-pascal-case': [1, { allowLeadingUnderscore: true }],
			'react/iframe-missing-sandbox': 'error',
			'react/self-closing-comp': [
				'warn',
				{
					component: true,
					html: true,
				},
			],

			// Styles
			'@stylistic/js/indent': ['off', 'tab'],
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},
]
