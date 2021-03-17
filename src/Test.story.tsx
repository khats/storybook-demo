import { Story } from "@storybook/react";
import * as React from "react";
export const FakeStory: Story = () => {
    window.FAKE_GLOBAL_FUNCTION();
    return (<div>Fake story body3</div>);
};

FakeStory.storyName = "Fake story 12";
export default { title: "Fake Story" };
