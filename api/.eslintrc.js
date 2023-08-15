module.exports = {
<<<<<<< HEAD
  env: {
    es6: true,
    node: true,
  },

  extends: ["airbnb-base"],

  global: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module",
  },

  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
  },
=======
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
>>>>>>> 2b53ddc (update)
};
