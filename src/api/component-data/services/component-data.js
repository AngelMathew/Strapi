'use strict';

/**
 * component-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::component-data.component-data');
