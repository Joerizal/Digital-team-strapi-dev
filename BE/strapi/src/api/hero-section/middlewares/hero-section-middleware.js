'use strict';

/**
 * `hero-section-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In hero-section-middleware middleware.');

    ctx.query.populate = {
      hero: {
        populate: {
          text: true, // ✅ repeatable component, includes all fields by default
          image: {
            populate: {
              file: {
                fields: ["url", "alternativeText"], // ✅ media inside component
              },
            },
          },
        },
      },
    };

    await next();
  };
};
