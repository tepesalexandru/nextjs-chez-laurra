require("dotenv").config();
const path = require("path");
const withImages = require("next-images");

module.exports = withImages({

    env: {
        API_URL: process.env.API_URL
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },

    webpack: (config, options) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');

        return config;
    }
})