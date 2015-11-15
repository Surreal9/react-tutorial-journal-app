Local Journal App
=================

A simple journal app used in John Arnold's talk given about JavaScript. 

Installation
------------

To install the packages run

    npm install

Then to run the server, run

    npm run dev

and open a browser to http://localhost:8080

Tech Used
---------

- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/), along with [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
- [ESlint](http://eslint.org/), using [Airbnb's eslintrc](https://www.npmjs.com/package/eslint-config-airbnb)
- [Babel](https://babeljs.io/) enabling [ES2015](https://babeljs.io/docs/learn-es2015/), also see [ES6Fiddle](http://www.es6fiddle.net/)

Setup For A New Project
-----------------------

To re-create the initial environment from scratch, run these commands:

    npm init
    npm install --save react react-dom
    npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 eslint eslint-config-airbnb eslint-plugin-react webpack webpack-dev-server

Then refer to/copy from these files in this project:

- webpack.config.js
- .babelrc
- .eslintrc
- public/index.html
- src/app.js

Editor Setup
------------

If you would like to take advantage of linting in your editor (and enable ES2015 syntax highlighting), here are the steps to configure [SublimeText](http://www.sublimetext.com/3)

1. Ensure you have [SublimeText Package Control](https://packagecontrol.io/installation) installed
2. Install the package 'Babel'
3. Install the package 'SublimeLinter'
4. Install the package 'SublimeLinter-contrib-eslint'
5. Open a .js file, and in Sublime go through the menus -> View -> Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)
  - Do the same with a .jsx file
6. (Optional) Install the package 'Oceanic Next Color Scheme' and enable it through Preferences -> Color Scheme -> Oceanic Next Color Scheme
