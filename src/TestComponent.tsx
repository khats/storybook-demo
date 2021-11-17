import * as React from "react";

export class TestComponent extends React.Component {
    private container: HTMLElement | undefined;

    public componentDidMount() {
        console.log(`component did mount, container width: ${this.container?.clientWidth}`);
    }

    private setContainerCallback = (ref: HTMLElement | null) => {
        if (ref) {
            this.container = ref;
        }
    };

    public render() {
        console.log("render");
        return (<div ref={this.setContainerCallback}>I am test component</div>);
    }
}