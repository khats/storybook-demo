import { addons } from "@storybook/addons";

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "right",
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: "addon-controls",
    initialActive: "sidebar",
    sidebar: {
        showRoots: false,
    }
});
