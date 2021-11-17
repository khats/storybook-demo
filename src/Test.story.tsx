import { Story } from "@storybook/react";
import * as React from "react";
import { TestComponent } from "./TestComponent";

export const FakeStory: Story = () => {
    return (<TestComponent />);
};

export default { title: "Story folder", component: FakeStory };
