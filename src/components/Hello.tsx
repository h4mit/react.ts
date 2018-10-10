import * as React from "react";

export interface IHelloProps { compiler: string; framework: string; }

// 'IHello' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, any> {

    constructor(props: IHelloProps) {
        super(props);
    }

    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}