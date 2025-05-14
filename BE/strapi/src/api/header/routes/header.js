'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * header router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header.header', {
    config: {
        find: {
            middlewares: ["api::header.header-middleware"]
        }

        // uncomment if want to use for findOne too
        //findOne: {
        // middlewares: ["api::header.header-middleware"]
        //}
    }
});
