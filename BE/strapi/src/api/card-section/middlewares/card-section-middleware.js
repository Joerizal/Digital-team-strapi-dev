'use strict';

const cardSection = require("../controllers/card-section");

/**
 * `card-section-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In card-section-middleware middleware.');

    ctx.query.populate = {
      image1: {
        populate: {
          file: {
            fields: ["url", "alternativeText"]
          }
        }
      },
      title1: true,
      subTitle1: true,
      description: true,
      readMore: true,
      title2: true,
      subTitle2: true,
      cardSection1: {
        populate: {
          backgroundImage1: {
            populate: {
              file: {
                fields: ["url", "alternativeText"]
              }
            }
          },
          backgroundImage2: {
            populate: {
              file: {
                fields: ["url", "alternativeText"]
              }
            }
          }
        }
      }
    };


    await next();
  };
};
