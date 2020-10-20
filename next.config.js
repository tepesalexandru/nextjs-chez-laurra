require("dotenv").config();
const path = require("path");
const withImages = require("next-images");
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
    ro: 'ro',
    en: 'en',
    fr: 'fr',
    
}
module.exports = withImages({
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    env: {
        API_URL: process.env.API_URL,
        AWS_URL: process.env.AWS_URL,
        localeSubpaths
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        AWS_URL: process.env.AWS_URL,
        localeSubpaths
    },

    webpack: (config, options) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');

        return config;
    },
    
})