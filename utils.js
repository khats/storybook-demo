const { uniq } = require("lodash");

function mergeConfigs(defaultConfig, customConfig) {
    const defaultConfigKeys = Object.keys(defaultConfig);
    const customConfigKeys = Object.keys(customConfig);

    const result = { ...defaultConfig };

    defaultConfigKeys.forEach(key => {
        if (!customConfigKeys.includes(key)) {
            return;
        }

        const defaultValue = defaultConfig[key];
        const customValue = customConfig[key];

        if (Array.isArray(defaultValue) && Array.isArray(customValue)) {
            result[key] = uniq([...customValue, ...defaultValue]);
        } else if (
            defaultValue !== null
            && typeof defaultValue === "object"
            && customValue !== null
            && typeof customValue === "object"
            && !(customValue instanceof RegExp)
        ) {
            result[key] = mergeConfigs(defaultValue, customValue);
        } else {
            result[key] = customValue;
        }
    });

    return {
        ...customConfig,
        ...result,
    };
}


module.exports = {
    mergeConfigs: mergeConfigs,
};
