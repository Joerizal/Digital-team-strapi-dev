'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * hero-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hero-section.hero-section', {
    config: {
        find: {
            middlewares: ["api::hero-section.hero-section-middleware"]
        }

        // Uncomment if you want to use for findOne too
        // findOne: {
        //   middlewares: ['api::hero-section.hero-section-middleware'],
        // },        
    }
});
