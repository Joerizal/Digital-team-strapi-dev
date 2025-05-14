'use strict';

/**
 * `header-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In header-middleware middleware.');

    ctx.query.populate = {
      logo: {
        populate: {
          logo: {
            fields: ["url", "alternativeText"]
          },
        },
      },
      link: {
        populate: {
          linkServices: true
        },
      },
      search: {
        populate: {
          searchIcon: {
            fields: ["url", "alternativeText"]
          },
        },
      },
      contact: {
        populate: {
          phoneIcon: {
            fields: ["url", "alternativeText"]
          }
        },
      },
    };

    await next();
  };
};
