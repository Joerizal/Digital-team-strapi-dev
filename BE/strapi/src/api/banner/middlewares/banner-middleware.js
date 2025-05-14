'use strict';

/**
 * `banner-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In banner-middleware middleware.');

    ctx.query.populate = {
      banner: {
        populate : {
          files: {
            fields: ["url", "alternativeText"]
          },
          files2: {
            fields: ["url", "alternativeText"]
          }
        },
      }
    }
    
    await next();
  };
};
