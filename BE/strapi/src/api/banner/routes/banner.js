'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * banner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::banner.banner', {
    config: {
        find: {
            middlewares: ["api::banner.banner-middleware"]
        }

        // Uncomment if you want to use for findOne too
        // findOne: {
        //   middlewares: ['api::banner.banner-middleware'],
        // },
    }
});
