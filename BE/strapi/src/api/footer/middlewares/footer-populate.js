"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In footer-populate middleware.");

    ctx.query.populate = {
      Logo: {
        populate: {
          Image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      Link: {
        populate: {
          Links: {
            // populate: {
            //   // Header: true,
            //   // Link: true,
            // },
          },
        },
      },
    };

    await next();
  };
};
