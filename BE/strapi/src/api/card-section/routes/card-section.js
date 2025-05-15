'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * card-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::card-section.card-section', {
    config: {
        find: {
            middlewares: ["api::card-section.card-section-middleware"]
        }
        
        // Uncomment if you want to use for findOne too
        // findOne: {
        //   middlewares: ['api::card-section.card-section-middleware'],
        // },
    }
});
