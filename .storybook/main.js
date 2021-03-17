const { mergeConfigs } = require("../utils");
const webpack = require("webpack");

const patchWebpackConfig = async (defaultConfig, options) => {
    return mergeConfigs(defaultConfig,
        {
        stats: "detailed",
        resolve : {
        },
            plugins: [
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": JSON.stringify("development"),
                    "window.FAKE_GLOBAL_FUNCTION": "(function() { return false; })",
                }),
            ],
    })
};

module.exports = {
    core: {
        builder: "webpack5",
    },
    webpackFinal: patchWebpackConfig,
    stories: ["../src/Test.story.tsx"],
};
