const path = require("path");

module.exports = {
    features:{
        storyStoreV7: true
    },
    addons:[
        {
            name: require.resolve(
                path.join(__dirname, "../node_modules/@storybook/react"),
            ),
        },
    ],
    stories: ["../src/Test.story.tsx"],
};
