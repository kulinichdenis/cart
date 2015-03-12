require("!style!css!less!../stylesheets/main.less");

var $ = require("jquery");
var _ = require("underscore");
var React = require("react");
var AppComponent  = require('./components/AppComponent.js');
require("./lib/Stuff.js");

var PRODUCTS = [
  {
    code: 'xbox',
    title: 'Xbox One',
    description: 'Be first to experience Xbox One. The Day One Edition features a commemorative controller and an exclusive achievement.',
    price: 499,
    img: require('../images/consoles/xbox.png')
  },
  {
    code: 'ps',
    title: 'PlayStation®4',
    description: 'The PlayStation®4 system redefines rich and immersive gameplay with powerful graphics and speed.',
    price: 399,
    img: require('../images/consoles/ps.png')
  },
  {
    code: 'wii',
    title: 'Wii U',
    description: "It's the console that will singlehandedly change the way people play games for years to come.",
    price: 300,
    img: require('../images/consoles/wii.png')
  }
];

var CartStore = Stuff('shopping_cart');

function renderApp() {
  React.render(<AppComponent products={PRODUCTS} store={CartStore}/>, document.body);
}

$(function() {
  renderApp();
});

