// index.js
const greetings = require('./greetings');

module.exports = {
  getHello: (name) => greetings.hello(name),
  getGoodbye: (name) => greetings.goodbye(name),
  getWelcome: (name) => greetings.welcome(name)
};
