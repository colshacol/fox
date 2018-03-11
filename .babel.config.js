const path = require('path')

module.exports = () => ({
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "loose": true,
        "targets": {
          "browsers": ["last 1 versions"]
        }
      }
    ],
    "@babel/preset-flow"
  ],
  "plugins": [
    "babel-plugin-console",
    "@babel/plugin-proposal-pipeline-operator",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-async-generators",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-syntax-optional-catch-binding",
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }],
		"@babel/plugin-proposal-decorators",
		[
			'babel-plugin-module-resolver',
			{
				"root": ["./src"],
				alias: {
          'fox': './src/index.js',
					'utilities': './src/utilities',
					'component': './src/core/component',
          'element': './src/core/element',
          'builtIn': './src/core/builtIn',
					'node': './src/core/node'
				}
			}
		],
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "fox.create", // default pragma is React.createElement
      "pragmaFrag": "fox.fragment", // default is React.Fragment
      "throwIfNamespace": false // defaults to true
    }]
  ]
})
