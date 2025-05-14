"use strict";

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreRouter("api::footer.footer", {
  config: {
    find: {
      middlewares: ["api::footer.footer-populate"],
    },
    // Uncomment if you want to use for findOne too
    // findOne: {
    //   middlewares: ['api::globall.globall'],
    // },
  },
});
